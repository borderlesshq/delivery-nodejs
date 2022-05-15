import { IState } from "../../interfaces";
import { ICountry } from "../../interfaces";

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
  async listCountries(limit: number): Promise<ICountry[]> {
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

    try {
      if (response.data) {
        return response.data.listCountries;
      }

      throw Error(response.error);
    } catch (error) {
      throw error;
    }
  }

  /**
   *
   * @param iso2 string
   * @returns
   */
  async listStates(iso2: string): Promise<IState[]> {
    const QUERY = `
              query listStates($iso2:String!){
                listStates(iso2:$iso2){
                  name,
                  stateCode,
                }
              }
            `;

    const response = await this.request(QUERY, { iso2 });
    try {
      if (response.data) {
        return response.data.listStates;
      }

      throw Error(response.error);
    } catch (error) {
      throw error;
    }
  }

  async getCountryByIso2(iso2: string): Promise<ICountry> {
    try {
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

      return response.data.getCountryByIso2;
    } catch (error) {
      throw error;
    }
  }
}

export default Misc;
