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
