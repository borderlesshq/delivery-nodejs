export interface DeliveryOptionsInterface {
  role: "User" | "Driver" | "API" | "Customer";
  token?: string;
  business_id: string;
}
