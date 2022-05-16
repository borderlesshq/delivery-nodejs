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
    const QUERY = `
    query setupBusiness(
        $name: String!
        $planId: String!
        $brandLogoURL: String!
        $brandCoverPhotoURL: String!
        $brandColor: String!
        $contactEmail: String!
        $contactPhone: String!
        $address: String!
        $iso2: String!
        $stateCode: String!){
        setupBusiness(name: $name,
            planId: $planId,
            brandLogoURL: $brandLogoURL,
            brandCoverPhotoURL: $brandCoverPhotoURL,
            brandColor:$brandColor,
            contactEmail:$contactEmail,
            contactPhone: $contactPhone,
            address: $address,
            iso2: $iso2,
            stateCode: $stateCode){
        success,
        message,
        token,
        resulType,
        data
      }
    }
    `;

    const response = await this.request(QUERY, { payload });

    return FormatResponse(response, "setupBusiness");
  }
}

export default Business;
