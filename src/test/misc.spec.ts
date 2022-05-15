import Delivery from "..";
import { RolesEnum } from "../enums";
import Misc from "../modules/misc";

jest.setTimeout(10000);

// let DeliveryInstance;
let iso2: string;
let service: Misc;
describe("Miscellenous Methods Tests", () => {
  beforeAll(async () => {
    const delivery = new Delivery({
      token: "",
      role: RolesEnum.User,
      business_id: "testing",
    });

    service = delivery.misc;
  });

  it("should get a list countries", async () => {
    const response = await service.listCountries(3);
    iso2 = response[0].iso2;
    expect(response.length).toBeGreaterThanOrEqual(3);
  });

  it("should get a list of states based on iso2", async () => {
    const response = await service.listStates("1");

    expect(response).toBeDefined();
  });
});
