import Misc from "../../src/modules/misc";
import { ICountry } from "../../src/modules/misc/interface";
import faker from "@faker-js/faker";
import Delivery from "../../src";
import { IBusiness } from "../../src/modules/business/interface";

export const getCountry = async (countries: ICountry[], misc_service: Misc) => {
  const country = countries[Math.floor(Math.random() * countries.length)];
  let iso2 = country.iso2;

  let response = (await misc_service.listStates(iso2)).data[0];

  return {
    ...response,
    country,
  };
};

let token;

const delivery = new Delivery({ token });

export const getInitiationCredentials = async () => {
  const account = await accountSetup();
  token = await getToken(account.email, "password");

  const business_id = (await getBusinessDetails()).id;

  return {
    account,
    business_id,
    token,
  };
};

const accountSetup = async () => {
  const service = delivery.account;

  const response = await service.setupAccount({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phone: faker.phone.phoneNumber("+2349078######"),
    email: faker.internet.exampleEmail(),
    iso2: "NG",
    password: "password",
    repeatPassword: "password",
  });

  return response.data.data;
};

const getToken = async (email: string, password: string) => {
  const service = delivery.authentication;
  const response = await service.webLogin(email, password);

  return response.data.token;
};

const getBusinessDetails = async (
  iso2?: string,
  stateCode?: string
): Promise<IBusiness> => {
  try {
    const delivery = new Delivery({ token, role: "User" });
    const service = delivery.business;
    const countryData = await getIso2AndStateCode();
    const response = await service.setupBusiness({
      name: faker.company.companyName(),
      brandLogoURL: faker.image.imageUrl(),
      brandCoverPhotoURL: faker.image.imageUrl(),
      brandColor: "#fff",
      contactEmail: faker.internet.exampleEmail(),
      contactPhone: faker.phone.phoneNumber("+2349078######"),
      address: faker.address.streetAddress(true),
      iso2: iso2 || countryData.country.iso2,
      stateCode: stateCode || countryData.stateCode,
    });

    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getIso2AndStateCode = async () => {
  const service = delivery.misc;

  const countries = (await service.listCountries(100)).data;

  const response = await getCountry(countries, service);

  if (!response.stateCode) {
    return getIso2AndStateCode();
  }
  return response;
};
