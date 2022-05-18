import faker from "@faker-js/faker";
import Delivery from "../src";
import Business from "../src/modules/business";
import {
  businessSetupDetails,
  instancePayload,
  registered_user,
} from "./data/test.data";

jest.setTimeout(10000);

let service: Business;
let businessName: string;
let business_id: string;
let iso2: string;
describe("Business methods tests", () => {
  beforeAll(async () => {
    const delivery = new Delivery(instancePayload);

    service = delivery.business;
  });

  it("should setup a business account", async () => {
    const response = await service.setupBusiness(businessSetupDetails);

    businessName = businessSetupDetails.name;
    iso2 = businessSetupDetails.iso2;
    expect(response.data).toBeDefined();

    business_id = response.data.data.id;
  });

  it("should update business", async () => {
    const {
      registered_business: { id },
    } = registered_user;
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

  let operating_country_id: string;
  it("should create a business operating country", async () => {
    const response = await service.createBusinessOperatingCountry({
      businessId: business_id,
      businessName,
      iso2: faker.address.countryCode("alpha-2"),
      controls: {
        allowedVehicleCategories: ["Bicycle"],
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
        allowedVehicleCategories: ["Bicycle"],
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
    expect(response.data).toBeTruthy();
    expect(response.data.success).toBeTruthy();
  });
});
