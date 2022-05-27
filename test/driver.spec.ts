import faker from "@faker-js/faker";
import Delivery from "../src";
import Driver from "../src/modules/driver";
import {
  ICreateDriverInput,
  IUpdateUpdateDriverInput,
} from "../src/modules/driver/interface";
import Misc from "../src/modules/misc";
import { ICountry } from "../src/modules/misc/interface";
import { instancePayload } from "./data/test.data";
import { getCountry } from "./data/utils";

jest.setTimeout(10000);

let service: Driver;
let countries: ICountry[];
let iso2: string;
let stateCode: string;
let misc_service: Misc;
let driver_id: string;
describe("Driver methods tests", () => {
  beforeAll(async () => {
    const delivery = new Delivery(instancePayload);
    service = delivery.driver;
    misc_service = delivery.misc;

    countries = (await delivery.misc.listCountries(1000)).data;
  });

  it("should create a driver account", async () => {
    let state = await getCountry(countries, misc_service);

    if (!state) {
      state = await getCountry(countries, misc_service);
    }
    iso2 = state.country.iso2;
    stateCode = state.stateCode;

    const driver_data: ICreateDriverInput = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      pictureURL: faker.image.imageUrl(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber("+2349078######"),
      iso2,
      country: state.country.name,
      state: state.name,
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
});
