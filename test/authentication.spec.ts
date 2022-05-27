import Delivery from "../src";
import Authentication from "../src/modules/authentication";
import {
  CreateIntgrationData,
  instancePayload,
  registered_user,
} from "./data/test.data";

jest.setTimeout(10000);

let service: Authentication;
let integrationId = "01g3a2bqx1affnbbgn9qvw852n";
describe("Authentication methods test", () => {
  beforeAll(async () => {
    const delivery = new Delivery(instancePayload);

    service = delivery.authentication;
  });

  it("should sign a user into the app and retrieve a access token via webLogin", async () => {
    const { email, password } = registered_user;
    const response = await service.webLogin(email, password);

    expect(response.data).toBeDefined();
    expect(response.data.token).toBeDefined();

    console.log(response.data.token);
  });

  it("should sign a user into the app and retrieve a access token via mobileLogin", async () => {
    const { password, phone, role = "User", iso2, deviceId } = registered_user;

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
});
