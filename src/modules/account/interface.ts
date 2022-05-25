import { role, status } from "../authentication/interface";

export interface ISetupAccount {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  iso2: string;
  password: string;
  repeatPassword: string;
}

export interface IAccount {
  id: string;
  firstName: string;
  lastName: String;
  email: string;
  pictureURL: string;
  phone: string;
  address: string;
  iso2: string;
  country: string;
  role: role;
  timeCreated: string;
  timeUpdated: string;
}

export interface IUser extends IAccount {
  status: status;
  token: string;
  emailVerificationToken: string;
  resetPasswordToken: string;
  role: role;
  verified: boolean;
}
