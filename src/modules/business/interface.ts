import { IEnvironment, status } from "../authentication/interface";
export interface SetupBusinessPayload {
  name: string;
  brandLogoURL: string;
  brandCoverPhotoURL: string;
  brandColor: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  iso2: string;
  stateCode: string;
}

export interface IUpdateBusinessInput extends Partial<SetupBusinessPayload> {
  id: string;
  state?: string;
  country?: string;
  city?: string;
  baseCurrency?: string;
}

export interface IUpdateBusinessSetupInput {
  category: "couriers" | "retailers" | "platforms";
  assetSize: "not_applicable" | "small" | "medium" | "large" | "enterprise";
  outletSize: "not_applicable" | "small" | "medium" | "large" | "enterprise";
  monthlyOrderVolume: number;
  planId: string;
}

export interface ICreateBusinessOperatingCountry {
  businessId: string;
  businessName: string;
  iso2: string;
  controls: IControls;
}

export interface IControls {
  allowDriverSignup?: boolean;
  allowAutoAssignDriver?: boolean;
  allowRouteOptimisation?: boolean;
  allowDriverPooling?: boolean;
  allowDriverPing?: boolean;
  allowSMSNotifications?: boolean;
  allowAppPushNotifications?: boolean;
  allowInAppPayments?: boolean;
  allowCancelledOrderResurrection?: boolean;
  allowedVehicleCategories: [
    "Bike" | "Bus" | "Car" | "Tricycle" | "Bicycle" | "Truck"
  ];
}

export interface IUpdateBusinessOperatingCountryInput {
  id: string;
  overrideOperatingStatesControls?: boolean;
  controls?: IControls;
}

export interface ICreateBusinessOperatingStateInput {
  businessId: string;
  businessName: string;
  stateCode: string;
  iso2: string;
  controls: IControls;
}

export interface IUpdateBusinessOperatingStateInput {
  id: string;
  controls: IControls;
}

export interface IBusinessOperatingCountriesFilter {
  pageCursor?: string;
  status?: status;
  limit: number;
}

export interface IBusinessOperatingCountry {
  id: string;
  businessId: string;
  businessName: string;
  iso2: string;
  name: string;
  controls: IControls;
  currency: string;
  iso3: string;
  totalCustomers: string;
  totalDrivers: string;
  totalVehicles: string;
  totalOutlets: string;
  geometry: IGeometry;
  overrideOperatingStatesControls: boolean;
  status: status;
  contract: IBusinessCountryContract;
  timeCreated: number;
  timeUpdated: number;
}

export interface IGeometry {
  location: LatLng;
  bounds: LatLngBounds;
  viewport: LatLngBounds;
}

export interface LatLngBounds {
  northeast: LatLng;
  southwest: LatLng;
}

export interface LatLng {
  lat: number;
  lng: number;
}

export type IContractCategory =
  | "BO_DELIVERY_PRICE_CALCULATION"
  | "BO_DELIVERY_CREATED"
  | "BO_DELIVERY_COMPLETED"
  | "BO_DELIVERY_CANCELED";

export interface IBusinessCountryContract {
  id: string;
  businessId: string;
  businessName: string;
  iso2: string;
  country: string;
  stateCode: string;
  state: string;
  category: IContractCategory;
  environment: IEnvironment;
  status: status;
  code: string;
  codeLanguage: ICodeLanguage;
  timeCreated: number;
  timeUpdated: number;
}

export type ICodeLanguage = "javascript";
