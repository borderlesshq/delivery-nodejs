import { RolesEnum } from "../../enums";

export interface IMobileLoginInput {
  phone: string;
  iso2: string;
  password: string;
  role: "User" | "Driver" | "API" | "Customer";
  deviceId: string;
}

export interface IIntegration {
  id: string;
  sandboxKey: string;
  liveKey: string;
  name: string;
  environment: "live" | "sandbox";
  status:
    | "activated"
    | "pending"
    | "deactivated"
    | "processing"
    | "dispatched"
    | "declined"
    | "ready";

  businessId: string;
  businessName: string;
  timeCreated: number;
  timeUpdated: number;
  lastUsage: number;
}

export interface IListIntegrationsFilter {
  pageCursor?: string;
  environment?: "live" | "sandbox";
  limit: number;
  sortBy: "newer" | "older";
}
