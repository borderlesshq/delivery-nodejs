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
    query{
      listCountries(limit:${limit}){
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

    const response = await this.request.query(QUERY).toPromise();

    try {
      if (response.data) {
        return response.data.listCountries;
      }

      throw new Error(response.error.message);
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

    const response = await this.request.query(QUERY, { iso2 }).toPromise();
    try {
      if (response.data) {
        return response.data.listStates;
      }

      throw new Error(response.error.message);
    } catch (error) {
      throw error;
    }
  }

  async getCountryByIso2(iso2: string): Promise<ICountry> {
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

    const response = await this.request.query(QUERY, { iso2 }).toPromise();

    try {
      // console.log(response.operation);
      if (response.data) {
        return response.data.getCountryByIso2;
      }

      // throw new Error(response.error.message);
    } catch (error) {
      throw error;
    }
  }
}

export default Misc;
