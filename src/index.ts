import { DeliveryOptionsInterface } from "./interfaces";
import "isomorphic-unfetch";
import BaseService from "./utils/helpers/BaseService";
import Misc from "./modules/misc";
import Business from "./modules/business";
import Account from "./modules/account";
class Delivery extends BaseService {
  //   public service: any;
  /**
   *
   * @param payload token, role, business_id
   */
  constructor(payload: DeliveryOptionsInterface) {
    super(payload);
  }

  misc: Misc = new Misc(this.request);
  business: Business = new Business(this.request);
  account: Account = new Account(this.request);
}

enum RolesEnum {
  User = "User",
}

const del = new Delivery({ token: "", role: RolesEnum.User, business_id: "" });

async () => {
  const list = await del.misc.getCountryByIso2("3");
  console.log(list);
};

export default Delivery;
