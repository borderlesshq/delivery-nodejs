import { RolesEnum } from "../../src/enums";
import { SetupBusinessPayload } from "../../src/modules/business/interface";
import { faker } from "@faker-js/faker";
import { ISetupAccount } from "../../src/modules/account/interface";

export const registered_user = {
  email: "staging@staging.com",
  password: "password",
  id: "01g37apdmyd18a9f1rnj4xvbmm",
  firstName: "staging",
  lastName: "staging",
  pictureURL: "https://ui-avatars.com/api/?name=staging+staging",
  phone: "+2349078564323",
  address: "",
  iso2: "NG",
  country: "Nigeria",
  role: "",
  timeCreated: 1652734768,
  timeUpdated: 1652734768,
};

export const instancePayload = {
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAxZzM3YXBkbXlkMThhOWYxcm5qNHh2Ym1tIiwiY2xpZW50IjoiIiwiaXNzIjoiQm9yZGVybGVzcyBIUSBJbmMuIiwic3ViIjoiQm9yZGVybGVzc0hRIEFQSSBUb2tlbiIsImF1ZCI6Imh0dHBzOi8vYm9yZGVybGVzc2hxLmNvbSIsImlhdCI6MTY1Mjc0MjQ0MCwianRpIjoiQm9yZGVybGVzcyBIUSBJbmMuIn0.suUEA5Xp0r2att4Xzad6up5gVk8YXQJIdvYiEYa29qI",
  role: RolesEnum.User,
  business_id: "1234",
};

export const businessSetupDetails: SetupBusinessPayload = {
  name: faker.company.companyName(),
  // planId: faker.datatype.number.toString(),
  brandLogoURL: faker.image.imageUrl(),
  brandCoverPhotoURL: faker.image.imageUrl(),
  brandColor: "#fff",
  contactEmail: faker.internet.exampleEmail(),
  contactPhone: faker.phone.phoneNumber("+2349078######"),
  address: faker.address.streetAddress(true),
  iso2: "NG",
  stateCode: "EK",
};

export const AccountSetupDetails: ISetupAccount = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  phone: faker.phone.phoneNumber("+2349078######"),
  email: faker.internet.exampleEmail(),
  iso2: faker.address.countryCode("alpha-2"),
  password: "password",
  repeatPassword: "password",
};
