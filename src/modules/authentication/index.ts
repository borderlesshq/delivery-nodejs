import { FormatResponse } from "../../utils/helpers/functions";
import {
  IIntegration,
  IListIntegrationsFilter,
  IMobileLoginInput,
} from "./interface";

class Authentication {
  private request: any;
  constructor(request) {
    this.request = request;
  }

  /**
   *
   * @param email string
   * @param password string
   * @returns
   */
  async webLogin(
    email: string,
    password: string
  ): Promise<{ data: any; error: string }> {
    const MUTATION = `
        mutation webLogin($email: String! $password: String!){
            webLogin(email:$email, password:$password){
                success,
                message,
                token,
                resultType,
                data
            }

        }
    `;

    const response = await this.request(MUTATION, { email, password });

    return FormatResponse(response, "webLogin");
  }

  /**
   *
   * @param payload object
   * @returns
   */
  async mobileLogin(
    payload: IMobileLoginInput
  ): Promise<{ data: any; error: string }> {
    const MUTATION = `
        mutation mobileLogin($payload: MobileLoginInput!){
            mobileLogin(payload:$payload){
                success,
                message,
                token,
                resultType,
                data
            }

        }
    `;

    const response = await this.request(MUTATION, { payload });

    return FormatResponse(response, "mobileLogin");
  }

  async createIntegration(payload: {
    name: string;
  }): Promise<{ data: any; error: string }> {
    const MUTATION = `
      mutation createIntegration($payload: CreateIntegrationInput!){
          createIntegration(payload:$payload){
              success,
              message,
              token,
              resultType,
              data
          }

      }
      `;
    const response = await this.request(MUTATION, { payload });

    return FormatResponse(response, "createIntegration");
  }

  /**
   *
   * @param integration_id string
   * @returns
   */
  async reGenerateIntegrationAPIKeys(
    integration_id: string
  ): Promise<{ data: any; error: string }> {
    const MUTATION = `
      mutation  reGenerateIntegrationAPIKeys($id: String!){
            reGenerateIntegrationAPIKeys(id:$id){
                success,
                message,
                token,
                resultType,
                data
            }
        }
    `;

    const response = await this.request(MUTATION, { id: integration_id });

    return FormatResponse(response, "reGenerateIntegrationAPIKeys");
  }

  /**
   *
   * @param integration_id string
   * @returns
   */
  async deactivateIntegration(
    integration_id: string
  ): Promise<{ data: any; error: string }> {
    const MUTATION = `
    mutation  deactivateIntegration($id: String!){
          deactivateIntegration(id:$id){
              success,
              message,
              token,
              resultType,
              data
          }
      }
  `;

    const response = await this.request(MUTATION, { id: integration_id });

    return FormatResponse(response, "deactivateIntegration");
  }

  /**
   *
   * @param integration_id string
   * @returns
   */
  async activateIntegration(
    integration_id: string
  ): Promise<{ data: any; error: string }> {
    const MUTATION = `
    mutation  activateIntegration($id: String!){
          activateIntegration(id:$id){
              success,
              message,
              token,
              resultType,
              data
          }
      }
  `;

    const response = await this.request(MUTATION, { id: integration_id });

    return FormatResponse(response, "activateIntegration");
  }

  /**
   *
   * @param integration_id string
   * @returns
   */
  async getIntegrationById(
    integration_id: string
  ): Promise<{ data: IIntegration; error: string }> {
    const QUERY = `
    query  getIntegrationById($id: String!){
          getIntegrationById(id:$id){
              id,
              sandboxKey,
              liveKey,
              name,
              environment,
              status,
              businessId,
              businessName,
              timeCreated,
              timeUpdated,
              lastUsage
          }
      }
  `;

    const response = await this.request(QUERY, { id: integration_id });

    return FormatResponse(response, "getIntegrationById");
  }

  async listIntegrations(filters: IListIntegrationsFilter): Promise<{
    data: {
      count: number;
      nextPageCursor: string;
      previousPageCursor: string;
      data: IIntegration[];
    };
    error: string;
  }> {
    const QUERY = `
    query  listIntegrations($filters: IntegrationFilters!){
          listIntegrations(filters:$filters){
              count,
              nextPageCursor,
              previousPageCursor,
              data{id,
                sandboxKey,
                liveKey,
                name,
                environment,
                status,
                businessId,
                businessName,
                timeCreated,
                timeUpdated,
                lastUsage}
          }
      }
  `;

    const response = await this.request(QUERY, { filters });

    return FormatResponse(response, "listIntegrations");
  }

  /**
   *
   * @param integration_id string
   * @returns
   */
  async destroyIntegration(
    integration_id: string
  ): Promise<{ data: any; error: string }> {
    const MUTATION = `
    mutation  destroyIntegration($id: String!){
          destroyIntegration(id:$id){
              success,
              message,
              token,
              resultType,
              data
          }
      }
  `;

    const response = await this.request(MUTATION, { id: integration_id });

    return FormatResponse(response, "destroyIntegration");
  }
}

export default Authentication;
