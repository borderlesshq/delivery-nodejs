import faker from "@faker-js/faker";
import Delivery from "../src";
import Driver from "../src/modules/driver";
import {
  ICreateDriverInput,
  IUpdateUpdateDriverInput,
} from "../src/modules/driver/interface";

import { getInitiationCredentials, getIso2AndStateCode } from "./data/utils";

jest.setTimeout(1000000);

let service: Driver;
let iso2: string;
let stateCode: string;
let driver_id: string;
describe("Driver methods tests", () => {
  beforeAll(async () => {
    const credentials = await getInitiationCredentials();
    const delivery = new Delivery({
      token: credentials.token,
      business_id: credentials.business_id,
      role: "User",
    });
    service = delivery.driver;
  });

  it("should create a driver account", async () => {
    let countryData = await getIso2AndStateCode();
    iso2 = countryData.country.iso2;
    stateCode = countryData.stateCode;

    const driver_data: ICreateDriverInput = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      pictureURL: faker.image.imageUrl(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber("+2349078######"),
      iso2,
      country: countryData.country.name,
      state: countryData.name,
      stateCode,
      address: faker.address.streetAddress(true),
      deliveryRange: "international",
      mode: "exclusive",
    };

    const response = await service.createDriver(driver_data);

    expect(response.data.success).toBeTruthy();

    driver_id = response.data.data.id;
  });

  it("should update a driver account", async () => {
    const payload: IUpdateUpdateDriverInput = {
      id: driver_id,
      status: "activated",
    };
    const response = await service.updateDriver(payload);

    expect(response.data.success).toBeTruthy();
  });

  it("should deactivate a driver account", async () => {
    const response = await service.deactivateDriver(driver_id);

    expect(response.data.success).toBeTruthy();
  });

  it("should activate a driver account", async () => {
    const response = await service.activateDriver(driver_id);

    expect(response.data.success).toBeTruthy();
  });

  // it("should update a driver location", async () => {
  //   const response = await service.updateDriverLocation({
  //     lat: 0.01,
  //     lng: 4.0,
  //     speed: 5.0,
  //   });

  //   console.log(response);

  //   expect(response.data.success).toBeTruthy();
  // });

  it("should get a driver by id", async () => {
    const response = await service.getDriverById(driver_id);

    expect(response.data).toBeTruthy();
  });

  it("should list drivers", async () => {
    const response = await service.listDrivers({ limit: 10, sortBy: "newer" });
    expect(response.data.data).toBeTruthy();
  });

  it("should delete a driver", async () => {
    const response = await service.deleteDriver(driver_id);

    expect(response.data.success).toBeTruthy();
  });

  it("should create drivers in bulk", async () => {
    const response = await service.bulkCreateDrivers(
      "https://example.com/image.png"
    );

    console.log(response);
    expect(response.data.success).toBeTruthy();
  });
});
