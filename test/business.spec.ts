import Delivery from "../src";
import Business from "../src/modules/business";
import { businessSetupDetails, instancePayload } from "./data/test.data";

jest.setTimeout(10000);

let service: Business;
describe("Business methods tests", () => {
  beforeAll(async () => {
    const delivery = new Delivery(instancePayload);

    service = delivery.business;
  });

  it("should setup a business account", async () => {
    const response = await service.setupBusiness(businessSetupDetails);
    expect(response.data).toBeDefined();
  });
});
