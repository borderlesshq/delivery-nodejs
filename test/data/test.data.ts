import { RolesEnum } from "../../src/enums";
import { SetupBusinessPayload } from "../../src/modules/business/interface";
import { faker } from "@faker-js/faker";
import { ISetupAccount } from "../../src/modules/account/interface";
import { DeliveryOptionsInterface } from "../../src/interfaces";

export const registered_user = {
  id: "01g43s82h1e19xjjbzwzcaa6y8",
  firstName: "staging",
  lastName: "staging",
  email: "staging6@staging.com",
  pictureURL: "https://ui-avatars.com/api/?name=staging+staging",
  phone: "+2348078565329",
  address: null,
  iso2: "NG",
  country: "Nigeria",
  status: "activated",
  token: null,
  password: "password",
  emailVerificationToken: "452zS9XDs+klgGxqnfRka89Nu1FXSpLyh2dPguNZZSw=",
  resetPasswordToken: null,
  timeCreated: 1653163763,
  timeUpdated: 1653163763,
  verified: false,
  deviceId: faker.datatype.uuid(),
  registered_business: {
    id: "01g4qxyk14tk04mwsph3mp3h76",
    name: "Terry, Flatley and Hudson",
    brandLogoURL: "http://loremflickr.com/640/480",
    brandCoverPhotoURL: "http://loremflickr.com/640/480",
    brandColor: "#fff",
    address: "7768 Jaeden Tunnel Suite 721",
    contactEmail: "Sheila15@example.net",
    contactPhone: "+2349078685768",
    iso2: "US",
    userId: "01g4qxwer6f30vhbswasymep7t",
    planId: null,
    country: "United States",
    state: "American Samoa",
    stateCode: "AS",
    status: "activated",
    baseCurrency: "USD",
    timeCreated: 1654365572,
    timeUpdated: 1654365572,
    category: null,
    assetSize: null,
    outletSize: null,
    monthlyOrderVolume: null,
  },
};

export const registered_driver = {
  id: "01g48ytevdenx3kcy8nqmtjwsb",
  businessId: "01g43sb37m54z1y5pnp66vghdw",
  businessName: "Terry, Flatley and Hudson",
  firstName: "Anika",
  lastName: "Dare",
  pictureURL: "",
  email: "Dorian.Hodkiewicz@example.com",
  phone: "+2349078829086",
  dob: "",
  iso2: "CR",
  country: "Costa Rica",
  state: "Alajuela Province",
  stateCode: "A",
  address: null,
  mode: "exclusive",
  deliveryRange: "interstate",
  status: "pending",
  vehicleId: "",
  presence: "",
  timeCreated: 1653863168,
  timeUpdated: 1653863168,
  password: "password",
};

export const instancePayload: DeliveryOptionsInterface = {
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAxZzRxeHdlcjZmMzB2aGJzd2FzeW1lcDd0IiwiY2xpZW50IjoiIiwiaXNzIjoiQm9yZGVybGVzcyBIUSBJbmMuIiwic3ViIjoiQm9yZGVybGVzc0hRIEFQSSBUb2tlbiIsImF1ZCI6Imh0dHBzOi8vYm9yZGVybGVzc2hxLmNvbSIsImlhdCI6MTY1NDM2NTUxNywianRpIjoiQm9yZGVybGVzcyBIUSBJbmMuIn0.wKMujP9UuV_3Vu5KkCFwk-QkctuM8Zq0d9d32sbtB60",
  role: "User",
  business_id: registered_user.registered_business.id,
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
