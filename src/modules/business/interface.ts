import { IUser } from "../account/interface";
import { IEnvironment, ISorting, status } from "../authentication/interface";
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

export interface IBusiness extends SetupBusinessPayload {
  id: string;
  userId: string;
  owner: IUser;
  planId: string;
  state: string;
  status: status;
  baseCurrencry: string;
  environment: IEnvironment;
  timeCreated: number;
  timeUpdated: number;
  category: ICategory;
  assetSize: ISize;
  outletSize: ISize;
  monthlyOrderVolume: number;
}

export type ICategory = "couriers" | "retailers" | "platforms";

export interface IUpdateBusinessInput extends Partial<SetupBusinessPayload> {
  id: string;
  state?: string;
  country?: string;
  city?: string;
  baseCurrency?: string;
}

export interface IUpdateBusinessSetupInput {
  category: ICategory;
  assetSize: ISize;
  outletSize: ISize;
  monthlyOrderVolume: number;
  planId: string;
}

export type ISize =
  | "not_applicable"
  | "small"
  | "medium"
  | "large"
  | "enterprise";

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

export interface IBusinessOperatingStatesFilter
  extends IBusinessOperatingCountriesFilter {
  iso2: string;
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

export interface IBusinessOperatingState {
  id: string;
  businessId: string;
  businessName: string;
  iso2: string;
  name: string;
  stateCode: string;
  controls: IControls;
  currency: string;
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

export interface IBusinessFilters {
  pageCursor?: string;
  status?: status;
  planId?: string;
  iso2?: string;
  stateCode?: string;
  baseCurrency?: string;
  period?: IPeriod;
  sortBy: ISorting;
  limit: number;
}

export interface IPeriod {
  start: string;
  end: string;
}

export type ICodeLanguage = "javascript";
