import { ISorting, status } from "../authentication/interface";
import { IPeriod } from "../business/interface";

export interface ICreateDriverInput {
  firstName: string;
  lastName: string;
  pictureURL: string;
  email: string;
  phone: string;
  iso2: string;
  country: string;
  state: string;
  stateCode: string;
  address: string;
  deliveryRange: DeliveryRange;
  mode: DriverModel;
}

export type DeliveryRange = "local" | "interstate" | "international";
export type DriverModel = "exclusive" | "pool";

export interface IUpdateUpdateDriverInput extends Partial<ICreateDriverInput> {
  id: string;
  status?: DriverStatus;
  assigned?: boolean;
}

export type DriverStatus = "pending" | "declined" | "activated" | "deactivated";

export interface IUpdateDriverLocationInput {
  lat: number;
  lng: number;
  speed: number;
}

export interface IDriver extends ICreateDriverInput {
  id: string;
  businessId: string;
  businessName: string;
  statu: status;
  vehicleId: string;
  presence: DriverPresence;
  deliveries: string;
  ratings: string;
  timeCreated: number;
  timeUpdated: number;
}

export type DriverPresence = "online" | "offline";

export interface IListDriverFilters {
  pageCursor?: string;
  status?: status;
  iso2?: string;
  stateCode?: string;
  period?: IPeriod;
  sortBy: ISorting;
  limit: number;
  businessId?: string;
  assigned?: Boolean;
}
