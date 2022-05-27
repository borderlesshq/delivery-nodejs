import { FormatResponse } from "../../utils/helpers/functions";
import {
  ICreateDriverInput,
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
}

export default Driver;
