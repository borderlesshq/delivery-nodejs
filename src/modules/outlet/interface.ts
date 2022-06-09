import { status } from "../authentication/interface";

export interface ICreateOutletInput {
  name: string;
  brandPictureURL: string;
  contactPhone: string;
  contactEmail: string;
  address: string;
  country: string;
  state: string;
}

export interface IUpdateOutletInput extends Partial<ICreateOutletInput> {
  id: string;
}

export interface IOutlet extends ICreateOutletInput {
  id: string;
  businessId: string;
  businessName: string;
  iso2: string;
  status: status;
  timeCreated: number;
  timeUpdated: number;
}

export interface IOutletFilters {
  status?: status;
  country?: string;
  state?: string;
  limit: number;
}
