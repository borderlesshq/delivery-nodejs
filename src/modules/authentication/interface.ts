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
  environment: IEnvironment;
  status: status;
  businessId: string;
  businessName: string;
  timeCreated: number;
  timeUpdated: number;
  lastUsage: number;
}

export type IEnvironment = "live" | "sandbox";

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
  environment?: IEnvironment;
  limit: number;
  sortBy: ISorting;
}

export type ISorting = "newer" | "older";

export interface IRegisterInput {
  businessId: string;
  firstName: string;
  lastName: string;
  phone: string;
  iso2: string;
  stateCode: string;
  email: string;
  password: string;
  repeatPassword: string;
  role: role;
}
