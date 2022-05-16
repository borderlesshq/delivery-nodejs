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
  role: string;
  timeCreated: string;
  timeUpdated: string;
}
