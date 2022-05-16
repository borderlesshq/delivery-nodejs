import Delivery from "..";
import { RolesEnum } from "../enums";
import Misc from "../modules/misc";
import { instancePayload } from "../utils/data/test.data";
jest.setTimeout(10000);

// let DeliveryInstance;
let iso2: string;
let service: Misc;
describe("Miscellenous methods Tests", () => {
  beforeAll(async () => {
    const delivery = new Delivery(instancePayload);

    service = delivery.misc;
  });

  it("should get a list countries", async () => {
    const response = await service.listCountries(3);
    iso2 = response.data[0].iso2;
    expect(response.data.length).toBeGreaterThanOrEqual(3);
  });

  it("should get a list of states based on iso2", async () => {
    const response = await service.listStates(iso2);

    expect(response.data).toBeDefined();
  });

  it("should get a country by iso2", async () => {
    const response = await service.getCountryByIso2(iso2);

    expect(response.data).toBeDefined();
  });
});
