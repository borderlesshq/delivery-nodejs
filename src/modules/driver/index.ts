import { FormatResponse } from "../../utils/helpers/functions";
import { role } from "../authentication/interface";
import {
  ICreateDriverInput,
  IDriver,
  IListDriverFilters,
  IUpdateDriverLocationInput,
  IUpdateUpdateDriverInput,
} from "./interface";

class Driver {
  private request: any;
  constructor(request: any) {
    this.request = request;
  }

  /**
   * @description create a driver account
   * @param payload
   * @returns
   */
  async createDriver(
    payload: ICreateDriverInput
  ): Promise<{ data: any; error: any }> {
    const MUTATION = `
        mutation createDriver($payload:CreateDriverInput!){
            createDriver(payload:$payload){
                success,
                message,
                token,
                resultType,
                data
            }
        }
    `;

    const response = await this.request(MUTATION, { payload });

    return FormatResponse(response, "createDriver");
  }

  async updateDriver(
    payload: IUpdateUpdateDriverInput
  ): Promise<{ data: any; error: any }> {
    const MUTATION = `
        mutation updateDriver($payload:UpdateDriverInput!){
            updateDriver(payload:$payload){
                success,
                message,
                token,
                resultType,
                data
            }
        }
    `;

    const response = await this.request(MUTATION, { payload });

    return FormatResponse(response, "updateDriver");
  }

  async deactivateDriver(id: string): Promise<{ data: any; error: any }> {
    const MUTATION = `
        mutation   deactivateDriver($id:String!){
            deactivateDriver(id:$id){
                success,
                token,
                resultType,
                data
            }
        }
      `;
    const response = await this.request(MUTATION, { id });

    return FormatResponse(response, "deactivateDriver");
  }

  async activateDriver(id: string): Promise<{ data: any; error: any }> {
    const MUTATION = `
        mutation   activateDriver($id:String!){
            activateDriver(id:$id){
                success,
                token,
                resultType,
                data
            }
        }
      `;
    const response = await this.request(MUTATION, { id });

    return FormatResponse(response, "activateDriver");
  }

  async updateDriverLocation(
    payload: IUpdateDriverLocationInput
  ): Promise<{ data: any; error: any }> {
    const MUTATION = `
            mutation updateDriverLocation($payload:DriverPointInput!){
                updateDriverLocation(payload:$payload){
                    success,
                    message,
                    token,
                    resultType,
                    data
                }
            }
      `;

    const response = await this.request(MUTATION, { payload });

    return FormatResponse(response, "updateDriverLocation");
  }

  async getDriverById(id: string): Promise<{ data: IDriver; error: any }> {
    const QUERY = `
        query getDriverById($id:String!){
          getDriverById(id:$id){
            id,
            status,
            businessId,
            businessName,
            firstName,
            lastName,
            pictureURL,
            email,
            phone,
            role,
            deliveries,
            ratings,
            iso2,
            country,
            state,
            stateCode,
            deliveryRange,
            mode,
            address,
            timeCreated,
            timeUpdated,
            vehicleId,
            presence
          }
        }
    `;

    const response = await this.request(QUERY, { id });

    return FormatResponse(response, "getDriverById");
  }

  async listDrivers(filters: IListDriverFilters): Promise<{
    data: {
      count: number;
      nextPageCursor: string;
      previousPageCursor: string;
      data: IDriver[];
    };
    error: any;
  }> {
    const QUERY = `
      query listDrivers($filters:DriverFilters!){
        listDrivers(filters:$filters){
          count,
    previousPageCursor,
    nextPageCursor,
    data{
      id,
      status,
      businessId,
      businessName,
      firstName,
      lastName,
      pictureURL,
      email,
      phone,
      role,
      deliveries,
      ratings,
      iso2,
      country,
      state,
      stateCode,
      deliveryRange,
      mode,
      address,
      timeCreated,
      timeUpdated,
      vehicleId,
      presence
    }
        }
      }
    `;

    const response = await this.request(QUERY, { filters });

    return FormatResponse(response, "listDrivers");
  }

  async deleteDriver(id: string): Promise<{ data: any; error: any }> {
    const MUTATION = `
        mutation deleteDriver($id:String!){
          deleteDriver(id:$id){
            success,
            data,
            message,
            resultType
          }
        }
    `;

    const response = await this.request(MUTATION, { id });

    return FormatResponse(response, "deleteDriver");
  }

  async bulkCreateDrivers(fileURL: string): Promise<{ data: any; error: any }> {
    const MUTATION = `
        mutation bulkCreateDrivers($fileURL:String!){
          bulkCreateDrivers(fileURL:$fileURL){
            success,
            message,
            token,
            resultType,
            data
          }
        }
    `;

    const response = await this.request(MUTATION, { fileURL });

    return FormatResponse(response, "bulkCreateDrivers");
  }

  async watchBulkDriversStatus(headers: {
    token: string;
    role: role;
    businessId: string;
  }): Promise<{ data: any; error: any }> {
    const SUBSCRIBE = `
         subscription watchBulkDriversStatus($headers:Headers!){
          watchBulkDriversStatus(headers:$headers){
            businessId,
            businessName,
            fileURL,
            status,
            message,
            error,
            timeCreated,
            timeUpdated
          }
         }
    `;

    const response = await this.request(SUBSCRIBE, { headers });

    return FormatResponse(response, "watchBulkDriversStatus");
  }
}

export default Driver;
