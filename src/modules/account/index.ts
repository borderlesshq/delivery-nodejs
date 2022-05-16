import { FormatResponse } from "../../utils/helpers/functions";
import { IAccount, ISetupAccount } from "./interface";

class Account {
  private request: any;
  constructor(request) {
    this.request = request;
  }

  /**
   *
   * @param payload {object} - { firstName, lastName, phone, email, iso2, password, repeatPassword }
   * @returns
   */
  async setupAccount(
    payload: ISetupAccount
  ): Promise<{ data: any; error: string }> {
    const MUTATION = `
            mutation setupAccount($payload:SetupAccountInput!){
                setupAccount(payload:$payload){
                        success,
                        message,
                        token,
                        resultType,
                        data
                }
            }
        `;

    const response = await this.request(MUTATION, { payload });

    return FormatResponse(response, "setupAccount");
  }

  /**
   *
   * @param email
   * @param token
   * @returns
   */
  async verifyAccount(
    email: string,
    token: string
  ): Promise<{ data: any; error: string }> {
    const MUTATION = `
        mutation verifyUserAccount($email: String! $token: String!
            ){
                verifyUserAccount(email:$email,token:$token){
                    success,
                    message,
                    token,
                    data,
                    resultType,
                    data
                } 
            }
    `;

    const response = await this.request(MUTATION, { token, email });

    return FormatResponse(response, "verifyUserAccount");
  }

  async fetchAccount(): Promise<{ data: IAccount; error: string }> {
    const QUERY = `
        query fetchAccount(){
            fetchAccount(){
                id,
                firstName,
                lastName,
                email,
                pictureURL,
                phone,
                address,
                iso2,
                country,
                role,
                timeCreated,
                timeUpdated
            }
        }
      `;

    const response = await this.request(QUERY);

    return FormatResponse(response, "fetchAccount");
  }
}

export default Account;
