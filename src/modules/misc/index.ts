import { IState } from "./interface";
import { ICountry } from "./interface";
import { FormatResponse } from "../../utils/helpers/functions";

class Misc {
  private request;
  constructor(request) {
    this.request = request;
  }

  /**
   *
   * @param limit number
   * @returns
   */
  async listCountries(
    limit: number
  ): Promise<{ data: ICountry[]; error: string }> {
    const QUERY = `
    query listCountries($limit:Int!){
      listCountries(limit:$limit){
        name,
        iso2,
        iso3,
        phone_code,
        capital,
        currency,
        region,
        sub_region,
        emoji,
        emojiU,
        states{name,stateCode}
      }
    }
    `;

    const response = await this.request(QUERY, { limit });

    return FormatResponse(response, "listCountries");
  }

  /**
   *
   * @param iso2 string
   * @returns
   */
  async listStates(iso2: string): Promise<{ data: IState[]; error: string }> {
    const QUERY = `
              query listStates($iso2:String!){
                listStates(iso2:$iso2){
                  name,
                  stateCode,
                }
              }
            `;

    const response = await this.request(QUERY, { iso2 });

    return FormatResponse(response, "listStates");
  }

  /**
   *
   * @param iso2 string
   * @returns
   */
  async getCountryByIso2(
    iso2: string
  ): Promise<{ data: ICountry; error: string }> {
    const QUERY = `
              query getCountryByIso2($iso2:String!){
                getCountryByIso2(iso2:$iso2){
                  name,
                  iso2,
                  iso3,
                  phone_code,
                  capital,
                  currency,
                  region,
                  sub_region,
                  emoji,
                  emojiU,
                  states{name,stateCode}
                }
              }
            `;

    const response = await this.request(QUERY, { iso2 });

    return FormatResponse(response, "getCountryByIso2");
  }
}

export default Misc;
