import { RolesEnum } from "../../enums";
import { SetupBusinessPayload } from "../../modules/business/interface";

export const instancePayload = {
  token: "",
  role: RolesEnum.User,
  business_id: "1234",
};

export const businessSetupDetails: SetupBusinessPayload = {
  name: "seyi",
  planId: "3",
  brandLogoURL: "https://simple-url.com/logo",
  brandCoverPhotoURL: "https://simple-url.com/logo",
  brandColor: "#fff",
  contactEmail: "tester@test@gmail.com",
  contactPhone: "+2349078908765",
  address: "not available",
  iso2: "NG",
  stateCode: "EK",
};
