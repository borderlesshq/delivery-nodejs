import { RolesEnum } from "../enums";

export interface DeliveryOptionsInterface {
  role: RolesEnum;
  token?: string;
  business_id: string;
}
