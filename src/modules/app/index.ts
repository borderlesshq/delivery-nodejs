import { FormatResponse } from "../../utils/helpers/functions";
import { ICreateAppInput } from "./interface";

class App {
  private request: any;
  constructor(request: any) {
    this.request = request;
  }

  async createApp(
    payload: ICreateAppInput
  ): Promise<{ data: any; error: any }> {
    const MUTATION = `
        mutation createApp($payload:CreateAppInput!){
            createApp(payload:$payload){
                success,
                message,
                resultType,
                data
            }
        }
    `;

    const response = await this.request(MUTATION, { payload });

    return FormatResponse(response, "createApp");
  }
}

export default App;
