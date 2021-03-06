import Delivery from "../src";
import Deliveries from "../src/modules/delivery";
import { getInitiationCredentials } from "./data/utils";

jest.setTimeout(10000000);

let service: Deliveries;
let sessionId: string;
let deliveryId: string;

describe("Deliveries module tests", () => {
  beforeAll(async () => {
    const credentials = await getInitiationCredentials();
    const delivery = new Delivery({
      token: credentials.token,
      business_id: credentials.business_id,
      role: "User",
    });
    service = delivery.deliveries;
  });

  it("should create deliveries", async () => {
    const response = await service.createDelivery({
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

  it("should create deliveries in bulk", async () => {
    const response = await service.bulkCreateDeliveries(
      "https://example.com/image.png"
    );

    // console.log(response.error[0].locations);

    expect(response.data.success).toBeTruthy();
  });

  it("should get list of deliveries", async () => {
    const response = await service.listDeliveries({ limit: 10 });

    expect(response.data.data.length).toBeGreaterThan(1);
  });

  it("should get delivery by id", async () => {
    const response = await service.getDeliveryById(deliveryId);
    expect(response.data).toBeTruthy();
  });

  it("should get deliveries by sessionId", async () => {
    const response = await service.getDeliveriesSessionBySessionId(sessionId);
    expect(response.data.sessionId).toBeTruthy();
  });

  // it("should track single delivery trails input", async () => {
  //   const response = await service.trackSingleDeliveryTrails({
  //     businessId: instancePayload.business_id,
  //   });
  //   console.log(response);

  //   expect(response.data).toBeTruthy();
  // });

  // it("should watch bulk deliveries progess", async () => {
  //   const { token, business_id, role } = instancePayload;
  //   const response = await service.watchBulkDeliveriesProgress({
  //     token,
  //     role,
  //     businessId: business_id,
  //   });
  //   expect(response.data).toBeTruthy();
  // });

  // it("should watch pendng assignedDeliveries", async () => {
  //   const { token, business_id, role } = instancePayload;
  //   const response = await service.watchPendingAssignedDeliveries({
  //     token,
  //     role,
  //     businessId: business_id,
  //   });
  //   expect(response.data).toBeTruthy();
  // });

  // it("should create a drop off",async () => {
  //   const response = await service.createDropOffs();

  //   expect(response.data.success).toBeTruthy()
  // })

  // it("should remove dropoffs", async () => {
  //   const response = await service.removeDropOffs(["88e78we7989"]);
  //   console.log(response);
  //   expect(response.data).toBeDefined();
  // });
});
