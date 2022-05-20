import { RolesEnum } from "../../enums";

export interface IMobileLoginInput {
  phone: string;
  iso2: string;
  password: string;
  role: role;
  deviceId: string;
}

export type role = "User" | "Driver" | "API" | "Customer";

export interface IIntegration {
  id: string;
  sandboxKey: string;
  liveKey: string;
  name: string;
  environment: "live" | "sandbox";
  status: status;
  businessId: string;
  businessName: string;
  timeCreated: number;
  timeUpdated: number;
  lastUsage: number;
}

export type status =
  | "activated"
  | "pending"
  | "deactivated"
  | "processing"
  | "dispatched"
  | "declined"
  | "ready";

export interface IListIntegrationsFilter {
  pageCursor?: string;
  environment?: "live" | "sandbox";
  limit: number;
  sortBy: "newer" | "older";
}
