import Delivery from "../src";
import Misc from "../src/modules/misc";
import { getInitiationCredentials } from "./data/utils";
jest.setTimeout(1000000);

// let DeliveryInstance;
let iso2: string;
let service: Misc;
describe("Miscellenous methods Tests", () => {
  beforeAll(async () => {
    const credentials = await getInitiationCredentials();
    const delivery = new Delivery({
      token: credentials.token,
      business_id: credentials.business_id,
      role: "User",
    });

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
