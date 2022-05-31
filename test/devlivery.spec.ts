import Delivery from "../src";
import Deliveries from "../src/modules/delivery";
import { instancePayload } from "./data/test.data";

jest.setTimeout(10000);

let service: Deliveries;

describe("Deliveries module tests", () => {
  beforeAll(async () => {
    const delivery = new Delivery(instancePayload);
    service = delivery.deliveries;
  });
});
