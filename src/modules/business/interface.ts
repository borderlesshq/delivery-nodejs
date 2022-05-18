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

export interface ICreateBusinessOperatingCompany {
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
