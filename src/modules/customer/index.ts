import { FormatResponse } from "../../utils/helpers/functions";
import {
  ICreateCustomerInput,
  ICustomer,
  ICustomerFilters,
  IUpdateCustomerInput,
} from "./interface";

class Customer {
  private request: any;
  constructor(request: any) {
    this.request = request;
  }

  async createCustomer(
    payload: ICreateCustomerInput
  ): Promise<{ data: any; error: any }> {
    const MUTATION = `
        mutation createCustomer($payload:CreateCustomerInput!){
            createCustomer(payload:$payload){
                success,
                message,
                token,
                resultType,
                data
            }
        }
    `;

    const response = await this.request(MUTATION, { payload });

    return FormatResponse(response, "createCustomer");
  }

  async updateCustomer(
    payload: IUpdateCustomerInput
  ): Promise<{ data: any; error: any }> {
    const MUTATION = `
            mutation updateCustomer($payload:UpdateCustomerInput!){
                updateCustomer(payload:$payload){
                    success,
                    message,
                    resultType,
                    data
                }
            }
      `;

    const response = await this.request(MUTATION, { payload });

    return FormatResponse(response, "updateCustomer");
  }

  async deactivateCustomer(id: string): Promise<{ data: any; error: any }> {
    const MUTATION = `
            mutation  deactivateCustomer($id:String!){
                deactivateCustomer(id:$id){
                    success,
                    message,
                    token,
                    resultType,
                    data
                }
            }
      `;

    const response = await this.request(MUTATION, { id });
    return FormatResponse(response, "deactivateCustomer");
  }

  async activateCustomer(id: string): Promise<{ data: any; error: any }> {
    const MUTATION = `
            mutation  activateCustomer($id:String!){
                activateCustomer(id:$id){
                    success,
                    message,
                    token,
                    resultType,
                    data
                }
            }
      `;

    const response = await this.request(MUTATION, { id });
    return FormatResponse(response, "activateCustomer");
  }

  async getCustomerById(id: string): Promise<{ data: ICustomer; error: any }> {
    const QUERY = `
            query getCustomerById($id:String!){
                getCustomerById(id:$id){
                    id,
                    businessId,
                    firstName,
                    lastName,
                    pictureURL,
                    email,
                    phone,
                    dob,
                    role,
                    status,
                    state,
                    token,
                    stateCode,
                    iso2,
                    country,
                    address,
                    timeCreated,
                    timeUpdated
                }
            }
    `;

    const response = await this.request(QUERY, { id });

    return FormatResponse(response, "getCustomerById");
  }

  async getCustomerByEmail(
    email: string
  ): Promise<{ data: ICustomer; error: any }> {
    const QUERY = `
            query getCustomerByEmail($email:String!){
                getCustomerByEmail(email:$email){
                    id,
                    businessId,
                    firstName,
                    lastName,
                    pictureURL,
                    email,
                    phone,
                    dob,
                    role,
                    status,
                    state,
                    token,
                    stateCode,
                    iso2,
                    country,
                    address,
                    timeCreated,
                    timeUpdated
                }
            }
    `;

    const response = await this.request(QUERY, { email });

    return FormatResponse(response, "getCustomerByEmail");
  }

  async getCustomerByPhone(
    phone: string,
    iso2: string
  ): Promise<{ data: ICustomer; error: any }> {
    const QUERY = `
            query getCustomerByPhone($phone:String! $iso2:String!){
                getCustomerByPhone(phone:$phone, iso2:$iso2){
                    id,
                    businessId,
                    firstName,
                    lastName,
                    pictureURL,
                    email,
                    phone,
                    dob,
                    role,
                    status,
                    state,
                    token,
                    stateCode,
                    iso2,
                    country,
                    address,
                    timeCreated,
                    timeUpdated
                }
            }
    `;

    const response = await this.request(QUERY, { phone, iso2 });

    return FormatResponse(response, "getCustomerByPhone");
  }

  async listCustomers(filters: ICustomerFilters): Promise<{
    data: {
      count: number;
      data: ICustomer[];
      nextCursorId: string;
      previousCursorId: string;
    };
    error: any;
  }> {
    const QUERY = `
        query listCustomers($filters:CustomerFilters!){
            listCustomers(filters:$filters){
                count,
                nextCursorId,
                previousCursorId,
                data{
                    id,
                    businessId,
                    firstName,
                    lastName,
                    pictureURL,
                    email,
                    phone,
                    dob,
                    role,
                    status,
                    state,
                    token,
                    stateCode,
                    iso2,
                    country,
                    address,
                    timeCreated,
                    timeUpdated
                }
            }
        }

    `;
    const response = await this.request(QUERY, { filters });

    return FormatResponse(response, "listCustomers");
  }
}

export default Customer;
