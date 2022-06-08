import { ISorting, status } from "../authentication/interface";
import { IAllowedVehicleCategory } from "../business/interface";
import { PaymentMethod, PaymentModel } from "../delivery/interface";

export interface ICreateOrderInput {
  outletId: string;
  outletName: string;
  items: Item[];
  orderNote: string;
  productCarriage: IAllowedVehicleCategory;
  amount: number;
  currency: string;
  paymentMethod: PaymentMethod;
  paymentModel: PaymentModel;
  customer: OrderCustomerInput;
}

export interface Item {
  name: string;
  pictureURL: string;
  quantity: number;
  description: string;
  weight: string;
  tags: string;
}

export interface OrderCustomerInput {
  id?: string;
  name: string;
  email?: string;
  phone: string;
  state: string;
  stateCode: string;
  iso2: string;
  country: string;
  address: string;
}

export interface IPartialOrderInput extends Partial<ICreateOrderInput> {
  id?: string;
}

export interface IUpdateOrderInput
  extends Omit<IPartialOrderInput, "customer"> {
  id: string;
}

export interface IOrder extends ICreateOrderInput {
  businessId: string;
  businessName: string;
  staffId: string;
  staffName: string;
  status: status;
  reason: string;
  timeCreated: number;
  timeUpdated: number;
}

export interface IAcceptDeclineOrderInput {
  id: string;
  staffId: string;
  staffName: string;
  reason: string;
}

export interface IOrderFilters {
  pageCursor?: string;
  limit: "number";
  sortBy: ISorting;
  businessId?: string;
  outletId?: string;
  staffId?: string;
  customerId?: string;
  status?: status;
}
