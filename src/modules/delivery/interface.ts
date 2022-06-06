import {
  IAllowedVehicleCategory,
  IBusinessOperatingCountry,
  IBusinessOperatingState,
  IGeometry,
} from "../business/interface";
import { ICustomer } from "../customer/interface";
import { IDriver } from "../driver/interface";

export interface ICreateDeliveryInput {
  sessionId: string;
  customTrackingId?: string;
  requestPayment: boolean;
  paymentModel: PaymentModel;
}

export type PaymentModel = "ON_DELIVERY" | "BEFORE_DELIVERY" | "NOT_APPLICABLE";

export interface IListDeliveriesInput {
  status?: DeliveryStatus;
  stage?: DeliveryStage;
  driverId?: string;
  senderId?: string;
  sessionId?: string;
  mappindId?: string;
  pickupCarriage?: IAllowedVehicleCategory[];
  pageCursor?: string;
  limit: number;
}

export type DeliveryStatus = "pending" | "completed" | "cancelled" | "ongoing";
export type DeliveryStage =
  | "created"
  | "paid"
  | "driver_assigned"
  | "completed";

export type PaymentMethod =
  | "CASH"
  | "CARD"
  | "BANK"
  | "CRYPTO"
  | "WALLET"
  | "NOT_APPLICABLE";

export interface IDelivery {
  id: string;
  businessId: string;
  businessName: string;
  sessionId: string;
  mappingId: string;
  customTracking: string;
  requestPayment: boolean;
  paymentModel: PaymentModel;
  paymentMethod: PaymentMethod;
  price: number;
  paid: boolean;
  currency: string;
  priceBreakDown: any;
  status: DeliveryStatus;
  stage: DeliveryStage;
  pickupCarriage: IAllowedVehicleCategory;
  pickup: IPickup;
  dropOff: IDropOff;
  driver: IDriver;
  vehicle: any;
  timeCreated: number;
  timeUpdated: number;
}

export interface IPickup {
  id: string;
  bussinessId: string;
  businessName: string;
  sessionId: string;
  mappingId: string;
  sender: ICustomer;
  location: ILocation;
  packages: IPackage[];
  pickupCarriage: IAllowedVehicleCategory;
  countryConfig: IBusinessOperatingCountry;
  stateConfig: IBusinessOperatingState;
  locationPrice: ILocationPrice;
  savePickupDetails: boolean;
}

export interface IDropOff {
  id: string;
  bussinessId: string;
  sessionId: string;
  mappingId: string;
  recipient: ICustomer;
  location: ILocation;
  pickupPackages: IPickupPackage[];
  pickupCarriage: IAllowedVehicleCategory;
  countryConfig: IBusinessOperatingCountry;
  stateConfig: IBusinessOperatingState;
  locationPrice: ILocationPrice;
  saveDropOffLocation: boolean;
}

export interface IPickupPackage {
  pickupId: string;
  packageId: string;
  quantity: string;
}

export interface ILocation {
  address: string;
  country: string;
  state: string;
  iso2: string;
  stateCode: string;
  geometry: IGeometry;
}

export interface IPackage {
  id: string;
  pickupId: string;
  sessionId: string;
  mappingId: string;
  name: string;
  description: string;
  pictureURL: string;
  quantity: number;
  weight: number;
  weightUNIT: string;
  tags: string;
}

export interface ILocationPrice {
  id: string;
  iso2: string;
  country: string;
  state: string;
  stateCode: string;
  name: string;
  price: number;
  timeCreated: number;
  timeUpdated: number;
}

export interface ICreateDropOffInput {
  sessionId: string;
  mappingId: string;
  recipient: ICustomerInput;
  location: ILocationInput;
  pickupPackages: IPickupPackageInput[];
  saveDropOffLocation: boolean;
  locationPriceId: string;
}

export interface ILocationInput {
  address: string;
  country: string;
  state: string;
  iso2: string;
  stateCode: string;
}
export interface ICustomerInput {
  senderAccountId: string;
  name: string;
  pictureURL: string;
  email: string;
  phone: string;
  iso2: string;
}

export interface IPickupPackageInput {
  pickupId: string;
  packageId: string;
  quantity: string;
}

export interface ICreatePickupInput {
  sender: ICustomerInput;
  location: ILocationInput;
  packages: IPickupPackageInput[];
  pickupCarriage: IAllowedVehicleCategory;
  savePickupDetails: boolean;
  locationPriceId: string;
}
