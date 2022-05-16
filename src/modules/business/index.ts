import { FormatResponse } from "../../utils/helpers/functions";
import { SetupBusinessPayload } from "./interface";

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
}

export default Business;
