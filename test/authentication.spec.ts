import faker, { Faker } from "@faker-js/faker";
import Delivery from "../src";
import Authentication from "../src/modules/authentication";
import Business from "../src/modules/business";
import {
  businessSetupDetails,
  CreateIntgrationData,
  instancePayload,
  registered_user,
} from "./data/test.data";
import { getInitiationCredentials, getIso2AndStateCode } from "./data/utils";

jest.setTimeout(10000000);

let service: Authentication;
let integrationId = "01g3a2bqx1affnbbgn9qvw852n";
let business: Business;
let businessId: string;
let account;
describe("Authentication methods test", () => {
  beforeAll(async () => {
    const credentials = await getInitiationCredentials();
    account = credentials.account;
    businessId = credentials.business_id;
    const delivery = new Delivery({
      token: credentials.token,
      business_id: credentials.business_id,
      role: "User",
    });

    service = delivery.authentication;
    business = delivery.business;
  });

  it("should sign a user into the app and retrieve a access token via webLogin", async () => {
    const { email } = account;
    const response = await service.webLogin(email, "password");

    expect(response.data).toBeDefined();
    expect(response.data.token).toBeDefined();

    // console.log(response.data.token);
  });

  it("should sign a user into the app and retrieve a access token via mobileLogin", async () => {
    const { password, phone, iso2, deviceId } = registered_user;

    const response = await service.mobileLogin({
      phone,
      iso2,
      password,
      role: "User",
      deviceId,
    });

    expect(response.data).toBeDefined();
    expect(response.data.success).toBeTruthy();
  });

  it("should create an integration", async () => {
    const response = await service.createIntegration(CreateIntgrationData);

    // console.log(response);

    expect(response.data).toBeDefined();

    expect(response.data.data.liveKey).toBeTruthy();
    expect(response.data.data.sandboxKey).toBeTruthy();

    integrationId = response.data.data.id;
    // console.log(response);
  });

  it("should regenerate the integration api keys", async () => {
    const response = await service.reGenerateIntegrationAPIKeys(integrationId);

    expect(response.data).toBeDefined();
    expect(response.data.success).toBeTruthy();
    expect(response.data.data.sandboxKey).toBeTruthy();
  });

  it("should deactivate integration", async () => {
    const response = await service.deactivateIntegration(integrationId);

    expect(response.data.success).toBeTruthy();
    expect(response.data.data.status).toBe("deactivated");
  });

  it("should activate integration", async () => {
    const response = await service.activateIntegration(integrationId);

    expect(response.data.success).toBeTruthy();
    expect(response.data.data.status).toBe("activated");
  });

  it("should get integration", async () => {
    const response = await service.getIntegrationById(integrationId);

    expect(response.data.id).toBe(integrationId);
  });

  it("should get a list of integrations", async () => {
    const response = await service.listIntegrations({
      limit: 5,
      sortBy: "newer",
    });

    expect(response.data.count).toBeGreaterThanOrEqual(1);
  });

  it("should destroy an integration", async () => {
    const response = await service.destroyIntegration(integrationId);

    expect(response.data).toBeDefined();
  });

  it("should register a driver or customer", async () => {
    const result = await getIso2AndStateCode();
    let new_bussiness = await business.setupBusiness(businessSetupDetails);

    await business.createBusinessOperatingCountry({
      businessName: new_bussiness.data.data.name,
      businessId: new_bussiness.data.data.id,
      controls: { allowAutoAssignDriver: true },
      iso2: result.country.iso2,
    });

    await business.createBusinessOperatingState({
      iso2: result.country.iso2,
      stateCode: result.stateCode,
      controls: { allowDriverPing: true },
    });

    const response = await service.register({
      businessId: businessId,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      phone: faker.phone.phoneNumber("+2349078######"),
      iso2: result.country.iso2,
      stateCode: result.stateCode,
      password: "password",
      repeatPassword: "password",
      role: "Driver",
      email: faker.internet.exampleEmail(),
    });

    expect(response.data.success).toBeTruthy();
  });
});
