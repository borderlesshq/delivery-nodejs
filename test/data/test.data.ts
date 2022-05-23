import { RolesEnum } from "../../src/enums";
import { SetupBusinessPayload } from "../../src/modules/business/interface";
import { faker } from "@faker-js/faker";
import { ISetupAccount } from "../../src/modules/account/interface";
import { DeliveryOptionsInterface } from "../../src/interfaces";

export const registered_user = {
  id: "01g3m3t9s7avyyvvgg33egf8gp",
  firstName: "staging",
  lastName: "staging",
  email: "staging3@staging.com",
  pictureURL: "https://ui-avatars.com/api/?name=staging+staging",
  phone: "+2349078565320",
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
    id: "01g3sb7k5m7mzvzwvb973hyecb",
    name: "Terry, Flatley and Hudson",
    brandLogoURL: "http://loremflickr.com/640/480",
    brandCoverPhotoURL: "http://loremflickr.com/640/480",
    brandColor: "#fff",
    address: "7768 Jaeden Tunnel Suite 721",
    contactEmail: "Sheila11@example.net",
    contactPhone: "+2349078685760",
    iso2: "US",
    userId: "01g3sb5sm01r0wfqrp4mnngy8d",
    planId: null,
    country: "United States",
    state: "American Samoa",
    stateCode: "AS",
    status: "activated",
    baseCurrency: "USD",
    timeCreated: 1653166151,
    timeUpdated: 1653166151,
    category: null,
    assetSize: null,
    outletSize: null,
    monthlyOrderVolume: null,
  },
};

export const instancePayload: DeliveryOptionsInterface = {
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAxZzNzYjVzbTAxcjB3ZnFycDRtbm5neThkIiwiY2xpZW50IjoiIiwiaXNzIjoiQm9yZGVybGVzcyBIUSBJbmMuIiwic3ViIjoiQm9yZGVybGVzc0hRIEFQSSBUb2tlbiIsImF1ZCI6Imh0dHBzOi8vYm9yZGVybGVzc2hxLmNvbSIsImlhdCI6MTY1MzMzOTI5MywianRpIjoiQm9yZGVybGVzcyBIUSBJbmMuIn0.S0r35-CterKa7MUgG4O2kkVFxEckzb1P_Za51Lpr9rI",
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
