import { IAccount } from '../account/interface';
import { role, status } from '../authentication/interface';
import { IPeriod } from '../business/interface';

export interface ICreateCustomerInput {
  //   businessId: string;
  firstName: string;
  lastName: string;
  pictureURL: string;
  email: string;
  phone: string;
  iso2: string;
  country: string;
  address: string;
}

export interface IUpdateCustomerInput extends Partial<ICreateCustomerInput> {
  id: string;
}

export interface ICustomer extends IAccount {
  businessId: string;
  dob: string;
  role: role;
  token: string;
  state: string;
  stateCode: string;
}

export interface ICustomerFilters {
  nextCursorId?: string;
  previousCursorId?: string;
  businessId?: string;
  status?: status;
  iso2?: string;
  period?: IPeriod;
  limit: number;
}
