import { FormatResponse } from "../../utils/helpers/functions";
import {
  IBusinessOperatingCountriesFilter,
  IBusinessOperatingCountry,
  ICreateBusinessOperatingCountry,
  ICreateBusinessOperatingStateInput,
  IUpdateBusinessInput,
  IUpdateBusinessOperatingCountryInput,
  IUpdateBusinessOperatingStateInput,
  IUpdateBusinessSetupInput,
  SetupBusinessPayload,
} from "./interface";

class Business {
  private request: any;

  constructor(request) {
    this.request = request;
  }

  async setupBusiness(
    payload: SetupBusinessPayload
  ): Promise<{ data: any; error: string }> {
    const MUTATION = `
    mutation setupBusiness($payload: SetupBusinessInput!){
        setupBusiness(payload:$payload){
        success,
        message,
        token,
        resultType,
        data
      }
    }
    `;

    const response = await this.request(MUTATION, { payload });

    return FormatResponse(response, "setupBusiness");
  }

  /**
   *
   * @param payload
   * @returns
   */
  async updateBusiness(
    payload: IUpdateBusinessInput
  ): Promise<{ data: any; error: string }> {
    const MUTATION = `
      mutation updateBusiness($payload: UpdateBusinessInput!){
        updateBusiness(payload:$payload){
          success,
          message,
          token,
          resultType,
          data
        }

      }
    `;

    const response = await this.request(MUTATION, { payload });

    return FormatResponse(response, "updateBusiness");
  }

  /**
   *
   * @param payload
   */
  async updateBusinessSetup(
    payload: IUpdateBusinessSetupInput
  ): Promise<{ data: any; error: string }> {
    const MUTATION = `
      mutation updateBusinessSetup($payload: CompleteBusinessProfileInput!){
        updateBusinessSetup(payload:$payload){
          success,
          message,
          token,
          resultType,
          data
        }
      }
    `;

    const response = await this.request(MUTATION, { payload });

    return FormatResponse(response, "updateBusinessSetup");
  }

  async createBusinessOperatingCountry(
    payload: ICreateBusinessOperatingCountry
  ): Promise<{ data: any; error: string }> {
    const MUTATION = `
      mutation  createBusinessOperatingCountry($payload:CreateBusinessOperatingCountryInput!){
        createBusinessOperatingCountry(payload:$payload){
          success,
          message,
          token,
          resultType,
          data
        }
      }
    `;

    const response = await this.request(MUTATION, { payload });

    return FormatResponse(response, "createBusinessOperatingCountry");
  }

  async updateBusinessOperatingCountry(
    payload: IUpdateBusinessOperatingCountryInput
  ): Promise<{ data: any; error: string }> {
    const MUTATION = `
        mutation updateBusinessOperatingCountry($payload:UpdateBusinessOperatingCountryInput!){
          updateBusinessOperatingCountry(payload:$payload){
            success,
            message,
            token,
            resultType,
            data
          }
        }
    `;

    const response = await this.request(MUTATION, { payload });

    return FormatResponse(response, "updateBusinessOperatingCountry");
  }

  async deactivateBusinessOperatingCountry(
    id: string
  ): Promise<{ data: any; error: string }> {
    const MUTATION = `
      mutation deactivateBusinessOperatingCountry($id:String!){
        deactivateBusinessOperatingCountry(id:$id){
          success,
          message,
          token,
          resultType,
          data
        }
      }
    `;

    const response = await this.request(MUTATION, { id });

    return FormatResponse(response, "deactivateBusinessOperatingCountry");
  }

  async activateBusinessOperatingCountry(
    id: string
  ): Promise<{ data: any; error: string }> {
    const MUTATION = `
      mutation activateBusinessOperatingCountry($id:String!){
        activateBusinessOperatingCountry(id:$id){
          success,
          message,
          token,
          resultType,
          data
        }
      }
    `;

    const response = await this.request(MUTATION, { id });

    return FormatResponse(response, "activateBusinessOperatingCountry");
  }

  async createBusinessOperatingState(
    payload: ICreateBusinessOperatingStateInput
  ): Promise<{ data: any; error: string }> {
    const MUTATION = `
      mutation createBusinessOperatingState($payload:CreateBusinessOperatingStateInput!){
        createBusinessOperatingState(payload:$payload){
          success,
          message,
          token,
          resultType,
          data
        }
      }
    `;

    const response = await this.request(MUTATION, { payload });

    return FormatResponse(response, "createBusinessOperatingState");
  }

  async updateBusinessOperatingState(
    payload: IUpdateBusinessOperatingStateInput
  ): Promise<{ data: any; error: string }> {
    const MUTATION = `
      mutation updateBusinessOperatingState($payload:UpdateBusinessOperatingStateInput!){
        updateBusinessOperatingState(payload:$payload){
          success,
          message,
          token,
          resultType,
          data
        }
      }
    `;

    const response = await this.request(MUTATION, { payload });

    return FormatResponse(response, "updateBusinessOperatingState");
  }

  async deactivateBusinessOperatingState(
    id: string
  ): Promise<{ data: any; error: string }> {
    const MUTATION = `
      mutation deactivateBusinessOperatingState($id:String!){
        deactivateBusinessOperatingState(id:$id){
          success,
          message,
          token,
          resultType,
          data
        }
      }
    `;

    const response = await this.request(MUTATION, { id });

    return FormatResponse(response, "deactivateBusinessOperatingState");
  }

  async activateBusinessOperatingState(
    id: string
  ): Promise<{ data: any; error: string }> {
    const MUTATION = `
      mutation activateBusinessOperatingState($id:String!){
        activateBusinessOperatingState(id:$id){
          success,
          message,
          token,
          resultType,
          data
        }
      }
    `;

    const response = await this.request(MUTATION, { id });

    return FormatResponse(response, "activateBusinessOperatingState");
  }

  async listBusinessOperatingCountries(
    filters: IBusinessOperatingCountriesFilter
  ): Promise<{
    data: {
      count: number;
      nextPageCursor: string;
      previousPageCursor: string;
      data: IBusinessOperatingCountry[];
    };
    error: any;
  }> {
    const QUERY = `
      query listBusinessOperatingCountries($filters: BusinessOperatingCountriesFilter!){
        listBusinessOperatingCountries(filters:$filters){
          count,
          nextPageCursor,
          previousPageCursor,
          data{
            id,
            businessId,
            businessName,
            iso2,
            name,
            currency,
            iso3,
            totalCustomers,
            totalDrivers,
            totalVehicles,
            totalOutlets,
              overrideOperatingStatesControls,
            status,
            contract{
              id,
              businessId,
              businessName,
              iso2,
              country,
              stateCode,
              state,
              category,
              environment,
              status,
              code,
              codeLanguage,
              timeCreated,
              timeUpdated,
            },
            timeCreated,
            timeUpdated,
          
          }
        }
      }
    `;

    const response = await this.request(QUERY, { filters });

    return FormatResponse(response, "listBusinessOperatingCountries");
  }

  async getBusinessOperatingCountryById(id: string): Promise<{
    data: IBusinessOperatingCountry;

    error: any;
  }> {
    const QUERY = `
          query getBusinessOperatingCountryById($id:String!){
            getBusinessOperatingCountryById(id:$id){
              id,
            businessId,
            businessName,
            iso2,
            name,
            currency,
            iso3,
            totalCustomers,
            totalDrivers,
            totalVehicles,
            totalOutlets,
              overrideOperatingStatesControls,
            status,
            contract{
              id,
              businessId,
              businessName,
              iso2,
              country,
              stateCode,
              state,
              category,
              environment,
              status,
              code,
              codeLanguage,
              timeCreated,
              timeUpdated,
            },
            timeCreated,
            timeUpdated,
            }
          }
      `;

    const response = await this.request(QUERY, { id });

    return FormatResponse(response, "getBusinessOperatingCountryById");
  }

  async getBusinessOperatingCountryByIso2(iso2: string): Promise<{
    data: IBusinessOperatingCountry;

    error: any;
  }> {
    const QUERY = `
          query getBusinessOperatingCountryByIso2($iso2:String!){
            getBusinessOperatingCountryByIso2(iso2:$iso2){
              id,
            businessId,
            businessName,
            iso2,
            name,
            currency,
            iso3,
            totalCustomers,
            totalDrivers,
            totalVehicles,
            totalOutlets,
              overrideOperatingStatesControls,
            status,
            contract{
              id,
              businessId,
              businessName,
              iso2,
              country,
              stateCode,
              state,
              category,
              environment,
              status,
              code,
              codeLanguage,
              timeCreated,
              timeUpdated,
            },
            timeCreated,
            timeUpdated,
            }
          }
      `;

    const response = await this.request(QUERY, { iso2 });

    return FormatResponse(response, "getBusinessOperatingCountryByIso2");
  }
}

export default Business;
