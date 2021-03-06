import faker from "@faker-js/faker";
import Delivery from "../src";
import Business from "../src/modules/business";
import { businessSetupDetails } from "./data/test.data";
import { getInitiationCredentials, getIso2AndStateCode } from "./data/utils";

jest.setTimeout(1000000);

let service: Business;
let businessName: string;
let business_id: string;
let operating_country_id: string;
let iso2: string;
let stateCode: string;
let operating_state_id: string;

describe("Business methods tests", () => {
  beforeAll(async () => {
    const credentials = await getInitiationCredentials();
    const delivery = new Delivery({
      token: credentials.token,
      business_id: credentials.business_id,
      role: "User",
    });

    service = delivery.business;
  });

  it("should setup a business account", async () => {
    const response = await service.setupBusiness(businessSetupDetails);

    businessName = businessSetupDetails.name;
    // iso2 = businessSetupDetails.iso2;
    expect(response.data).toBeDefined();

    business_id = response.data.data.id;
  });

  it("should update business", async () => {
    const response = await service.updateBusiness({ id: business_id });

    expect(response.data).toBeDefined();
    expect(response.data.success).toBeTruthy();
  });

  it("should update business setup", async () => {
    const response = await service.updateBusinessSetup({
      category: "couriers",
      assetSize: "large",
      outletSize: "large",
      monthlyOrderVolume: 10,
      planId: faker.datatype.number().toString(),
    });

    expect(response.data).toBeDefined();
    expect(response.data.success).toBeTruthy();
  });

  it("should create a business operating country", async () => {
    const countryData = await getIso2AndStateCode();

    iso2 = countryData.country.iso2;

    stateCode = countryData.stateCode;

    const response = await service.createBusinessOperatingCountry({
      businessId: business_id,
      businessName,
      iso2: iso2,
      controls: {
        allowCancelledOrderResurrection: false,
      },
    });

    expect(response.data).toBeTruthy();
    expect(response.data.success).toBeTruthy();

    operating_country_id = response.data.data.id;
  });

  it("should update business operating country", async () => {
    const response = await service.updateBusinessOperatingCountry({
      id: operating_country_id,
      // overrideOperatingStatesControls: true,
      controls: {
        allowAutoAssignDriver: true,
      },
    });

    expect(response.data).toBeTruthy();
    expect(response.data.success).toBeTruthy();
  });

  it("should deactivate a business operating country", async () => {
    const response = await service.deactivateBusinessOperatingCountry(
      operating_country_id
    );
    expect(response.data).toBeTruthy();
    expect(response.data.success).toBeTruthy();
  });

  it("should activate a business operating country", async () => {
    const response = await service.activateBusinessOperatingCountry(
      operating_country_id
    );

    // console.log(response);
    expect(response.data).toBeTruthy();
    expect(response.data.success).toBeTruthy();
  });

  it("should create business operating state", async () => {
    const response = await service.createBusinessOperatingState({
      iso2: iso2,
      controls: { allowAppPushNotifications: true },
      stateCode: stateCode,
    });

    operating_state_id = response.data.data.id;

    expect(response.data).toBeTruthy();
    expect(response.data.success).toBeTruthy();
  });

  it("should update a business operating state", async () => {
    const response = await service.updateBusinessOperatingState({
      id: operating_state_id,
      controls: { allowAppPushNotifications: true },
      allowedVehicleCategories: ["Bicycle"],
    });
    expect(response.data).toBeTruthy();
    expect(response.data.success).toBeTruthy();
  });

  // it("should deactivate a business operating state", async () => {
  //   const response = await service.deactivateBusinessOperatingState(
  //     operating_state_id
  //   );

  //   console.log(response);
  //   expect(response.data).toBeTruthy();
  //   expect(response.data.success).toBeTruthy();
  // });

  it("should activate a business operating state", async () => {
    const response = await service.activateBusinessOperatingState(
      operating_state_id
    );
    expect(response.data).toBeTruthy();
    expect(response.data.success).toBeTruthy();
  });

  it("should list the business operating countries", async () => {
    const response = await service.listBusinessOperatingCountries({
      limit: 10,
    });
    expect(response.data).toBeTruthy();
    expect(response.data.data.length).toBeGreaterThanOrEqual(1);
  });

  it("should get a business operating country by Id", async () => {
    const response = await service.getBusinessOperatingCountryById(
      operating_country_id
    );
    // console.log(response);

    expect(response.data).toBeTruthy();
  });

  it("should get a business operating country by iso", async () => {
    const response = await service.getBusinessOperatingCountryByIso2(iso2);

    expect(response.data).toBeTruthy();
  });

  it("should list business operating states", async () => {
    const response = await service.listBusinessOperatingStates({
      limit: 10,
      iso2: "NG",
    });

    expect(response.data).toBeTruthy();
  });

  it("should get business by operating state id", async () => {
    const response = await service.getBusinessOperatingStateById(
      operating_state_id
    );

    expect(response.data).toBeTruthy();
  });

  it("should get a business operating state by statecode", async () => {
    const response = await service.getBusinessOperatingStateByStateCode(
      iso2,
      stateCode
    );

    expect(response.data).toBeTruthy();
  });

  it("should get a business by id", async () => {
    const response = await service.getBusinessById(business_id);
    expect(response.data).toBeTruthy();
  });

  it("should list all businesses", async () => {
    const response = await service.listBusinesses({
      limit: 10,
      sortBy: "newer",
    });

    expect(response.data.data).toBeTruthy();
  });
});
