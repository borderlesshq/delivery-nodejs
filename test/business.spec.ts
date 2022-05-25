import faker from "@faker-js/faker";
import { ICountry } from "../dist/src/modules/misc/interface";
import Delivery from "../src";
import Business from "../src/modules/business";
import Misc from "../src/modules/misc";
import { businessSetupDetails, instancePayload } from "./data/test.data";

jest.setTimeout(10000);

let service: Business;
let businessName: string;
let business_id: string;
let countries: ICountry[];
let operating_country_id: string;
let iso2: string;
let stateCode: string;
let misc_service: Misc;
let operating_state_id: string;

describe("Business methods tests", () => {
  beforeAll(async () => {
    const delivery = new Delivery(instancePayload);

    service = delivery.business;
    misc_service = delivery.misc;

    countries = (await delivery.misc.listCountries(1000)).data;
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

  const getCountry = async () => {
    const country = countries[Math.floor(Math.random() * countries.length)];
    iso2 = country.iso2;
    // stateCode = country.states[0].stateCode;
    // console.log(country);
    // stateCode = (await misc_service.listStates(iso2)).data[0].stateCode;
    let response = (await misc_service.listStates(iso2)).data[0];

    console.log(response);

    stateCode = response.stateCode;

    return response;
  };
  it("should create a business operating country", async () => {
    let state = await getCountry();

    if (!state) {
      state = await getCountry();
    }
    stateCode = state.stateCode;

    const response = await service.createBusinessOperatingCountry({
      businessId: business_id,
      businessName,
      iso2: iso2,
      controls: {
        allowCancelledOrderResurrection: false,
      },
    });

    console.log(response);

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
      businessId: business_id,
      businessName: businessName,
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
