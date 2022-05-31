import Delivery from "../src";
import Deliveries from "../src/modules/delivery";
import { instancePayload } from "./data/test.data";

jest.setTimeout(10000);

let service: Deliveries;
let sessionId: string;
let deliveryId: string;

describe("Deliveries module tests", () => {
  beforeAll(async () => {
    const delivery = new Delivery(instancePayload);
    service = delivery.deliveries;
  });

  it("should create deliveries", async () => {
    const response = await service.createDeliveries({
      sessionId: Date.now().toString(),
      customTrackingId: Date.now().toString(),
      requestPayment: true,
      paymentModel: "ON_DELIVERY",
    });

    expect(response.data.success).toBeTruthy();

    sessionId = response.data.data.sessionId;
    deliveryId = response.data.data.id;
  });

  //Driver Auth is needed
  // it("should start a delivery", async () => {
  //   const response = await service.startDelivery(deliveryId);
  //   // console.log(response);
  //   expect(response.data.success).toBeTruthy();
  // });

  it("should cancel deliveries", async () => {
    const response = await service.cancelDeliveries(sessionId);

    expect(response.data.success).toBeTruthy();
  });

  // it("should cancel a delivery", async () => {
  // const response = await service.cancelDelivery("");

  //   expect(response.data.success).toBeTruthy();
  // });

  // it("should complete a driver delivery", async () => {
  // const response = await service.completeDriverDelivery("");

  //   expect(response.data.success).toBeTruthy();
  // });

  // it("should assign a delivery to a driver", async () => {
  // const response = await service.assignDeliveryDriver("");

  //   expect(response.data.success).toBeTruthy();
  // });
});
