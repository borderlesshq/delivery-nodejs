import faker from "@faker-js/faker";
import Delivery from "../src";
import Outlet from "../src/modules/outlet";
import { instancePayload } from "./data/test.data";

jest.setTimeout(10000);

let service: Outlet;

describe("Outlet methods tests", () => {
  beforeAll(async () => {
    const delivery = new Delivery(instancePayload);

    service = delivery.outlet;
  });

  it("should create an outlet", async () => {
    const response = await service.createOutlet({
      name: faker.company.companyName(),
      brandPictureURL: faker.image.imageUrl(),
      contactEmail: faker.internet.exampleEmail(),
      contactPhone: faker.phone.phoneNumber("+2349078######"),
      address: faker.address.streetAddress(true),
      country: "United States",
      state: "American Samoa",
    });

    console.log(response);

    expect(response.data.success).toBeTruthy();
  });
});
