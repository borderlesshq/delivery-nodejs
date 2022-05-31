export interface ICreateDeliveriesInput {
  sessionId: string;
  customTrackingId?: string;
  requestPayment: boolean;
  paymentModel: PaymentModel;
}

export type PaymentModel = "ON_DELIVERY" | "BEFORE_DELIVERY" | "NOT_APPLICABLE";
