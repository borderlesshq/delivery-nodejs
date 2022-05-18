import { RolesEnum } from "../../src/enums";
import { SetupBusinessPayload } from "../../src/modules/business/interface";
import { faker } from "@faker-js/faker";
import { ISetupAccount } from "../../src/modules/account/interface";
import { DeliveryOptionsInterface } from "../../src/interfaces";

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
  deviceId: faker.datatype.uuid(),
  registered_business: {
    id: "01g3a1hjf5rt4nhra7ryzszjw2",
    name: "Terry, Flatley and Hudson",
    brandLogoURL: "http://loremflickr.com/640/480",
    brandCoverPhotoURL: "http://loremflickr.com/640/480",
    brandColor: "#fff",
    address: "7768 Jaeden Tunnel Suite 721",
    contactEmail: "Sheila_Kemmer11@example.net",
    contactPhone: "+2349078684513",
    iso2: "NG",
    userId: "01g37apdmyd18a9f1rnj4xvbmm",
    planId: null,
    country: "Nigeria",
    state: "Ekiti State",
    stateCode: "EK",
    status: "activated",
    baseCurrency: "NGN",
    timeCreated: 1652825836,
    timeUpdated: 1652825836,
    category: null,
    assetSize: null,
    outletSize: null,
    monthlyOrderVolume: null,
  },
};

export const instancePayload: DeliveryOptionsInterface = {
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAxZzM3YXBkbXlkMThhOWYxcm5qNHh2Ym1tIiwiY2xpZW50IjoiIiwiaXNzIjoiQm9yZGVybGVzcyBIUSBJbmMuIiwic3ViIjoiQm9yZGVybGVzc0hRIEFQSSBUb2tlbiIsImF1ZCI6Imh0dHBzOi8vYm9yZGVybGVzc2hxLmNvbSIsImlhdCI6MTY1MjgyMzg2NSwianRpIjoiQm9yZGVybGVzcyBIUSBJbmMuIn0._rLZDmWe65XNyUDaexKqTq6g4jvUM1qdpIDFw44emuo",
  role: "User",
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

export const CreateIntgrationData = {
  name: faker.company.companyName(),
};
