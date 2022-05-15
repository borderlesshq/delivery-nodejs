import { RolesEnum } from "../enums";

export interface DeliveryOptionsInterface {
  role: RolesEnum;
  token?: string;
  business_id: string;
}

export interface ICountry {
  name: string;
  iso2: string;
  iso3: string;
  phone_code: String;
  capital: string;
  currency: string;
  region: string;
  sub_region: string;
  emoji: string;
  emojiU: string;
  states: IState[];
}

export interface IState {
  name: string;
  stateCode: string;
}
