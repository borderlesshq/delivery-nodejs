import { FormatResponse } from "../../utils/helpers/functions";
import {
  IBusiness,
  IBusinessFilters,
  IBusinessOperatingCountriesFilter,
  IBusinessOperatingCountry,
  IBusinessOperatingState,
  IBusinessOperatingStatesFilter,
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

  async listBusinessOperatingStates(
    filters: IBusinessOperatingStatesFilter
  ): Promise<{
    data: {
      count: number;
      nextPageCursor: string;
      previousPageCursor: string;
      data: IBusinessOperatingState[];
    };

    error: any;
  }> {
    const QUERY = `
        query listBusinessOperatingStates($filters:BusinessOperatingStatesFilter!){
          listBusinessOperatingStates(filters:$filters){
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
            stateCode,
            country,
            totalCustomers,
            totalDrivers,
            totalVehicles,
            totalOutlets,
            status,
            contract{
              id,
              businessId,
              businessName,
              iso2,
              category,
              country,
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

    return FormatResponse(response, "listBusinessOperatingStates");
  }

  async getBusinessOperatingStateById(id: string): Promise<{
    data: IBusinessOperatingState;

    error: any;
  }> {
    const QUERY = `
        query getBusinessOperatingStateById($id:String!){
          getBusinessOperatingStateById(id:$id){
            id,
            businessId,
            businessName,
            iso2,
            name,
            currency,
            stateCode,
            country,
            totalCustomers,
            totalDrivers,
            totalVehicles,
            totalOutlets,
            status,
            contract{
              id,
              businessId,
              businessName,
              iso2,
              category,
              country,
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

    return FormatResponse(response, "getBusinessOperatingStateById");
  }

  async getBusinessOperatingStateByStateCode(
    iso2: string,
    stateCode: string
  ): Promise<{ data: IBusinessOperatingState; error: any }> {
    const QUERY = `
          query getBusinessOperatingStateByStateCode($iso2:String! $stateCode:String!){
            getBusinessOperatingStateByStateCode(iso2:$iso2, stateCode:$stateCode){
              id,
              businessId,
              businessName,
              iso2,
              name,
              currency,
              stateCode,
              country,
              totalCustomers,
              totalDrivers,
              totalVehicles,
              totalOutlets,
              status,
              contract{
                id,
                businessId,
                businessName,
                iso2,
                category,
                country,
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

    const response = await this.request(QUERY, { iso2, stateCode });

    return FormatResponse(response, "getBusinessOperatingStateByStateCode");
  }

  async getBusinessById(id: string): Promise<{ data: IBusiness; error: any }> {
    const QUERY = `
        query getBusinessById($id:String!){
          getBusinessById(id:$id){
            id,
            userId,
          owner{
            id,
            firstName,
            lastName,
            email,
            pictureURL,
            phone,
            address,
            iso2,
            status,
            token,
            emailVerificationToken,
            resetPasswordToken,
            role,
            timeCreated,
            timeUpdated,
            verified
          },
        planId,
        name,
        brandColor,
        brandLogoURL,
        brandCoverPhotoURL,
        contactEmail,
        contactPhone,
        address,
        country,
        iso2,
        state,
        stateCode,
        status,
        baseCurrency,
        environment,
        timeCreated,
        timeUpdated,
        category,
        assetSize,
        outletSize,
        monthlyOrderVolume
          }
        }
    `;
    const response = await this.request(QUERY, { id });

    return FormatResponse(response, "getBusinessById");
  }

  async listBusinesses(filters: IBusinessFilters): Promise<{
    data: {
      count: number;
      nexrPageCursor: string;
      previousPageCursor: string;
      data: IBusiness[];
    };
    error: any;
  }> {
    const QUERY = `
      query  listBusinesses($filters:BusinessFilters!){
        listBusinesses(filters:$filters){
          count,
          nextPageCursor,
          previousPageCursor,
          data{
            id,
            userId,
          owner{
            id,
            firstName,
            lastName,
            email,
            pictureURL,
            phone,
            address,
            iso2,
            status,
            token,
            emailVerificationToken,
            resetPasswordToken,
            role,
            timeCreated,
            timeUpdated,
            verified
          },
        planId,
        name,
        brandColor,
        brandLogoURL,
        brandCoverPhotoURL,
        contactEmail,
        contactPhone,
        address,
        country,
        iso2,
        state,
        stateCode,
        status,
        baseCurrency,
        environment,
        timeCreated,
        timeUpdated,
        category,
        assetSize,
        outletSize,
        monthlyOrderVolume
          }
        }
      }
    `;

    const response = await this.request(QUERY, { filters });

    return FormatResponse(response, "listBusinesses");
  }
}

export default Business;
