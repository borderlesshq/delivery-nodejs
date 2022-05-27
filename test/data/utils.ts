import Misc from "../../src/modules/misc";
import { ICountry } from "../../src/modules/misc/interface";

export const getCountry = async (countries: ICountry[], misc_service: Misc) => {
  const country = countries[Math.floor(Math.random() * countries.length)];
  let iso2 = country.iso2;
  // stateCode = country.states[0].stateCode;
  // console.log(country);
  // stateCode = (await misc_service.listStates(iso2)).data[0].stateCode;
  let response = (await misc_service.listStates(iso2)).data[0];

  //   console.log(response);

  //   stateCode = response.stateCode;
  return {
    ...response,
    country,
  };
};
