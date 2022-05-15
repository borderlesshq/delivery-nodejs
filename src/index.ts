import { DeliveryOptionsInterface } from "./interfaces";
import "isomorphic-unfetch";
import BaseService from "./utils/helpers/BaseService";
import Misc from "./modules/misc";
class Delivery extends BaseService {
  //   public service: any;
  /**
   *
   * @param payload token, role, business_id
   */
  constructor(payload: DeliveryOptionsInterface) {
    super(payload);
  }

  misc = new Misc(this.request());
}

enum RolesEnum {
  User = "User",
}

const del = new Delivery({ token: "", role: RolesEnum.User, business_id: "" });

async () => {
  const list = await del.misc.listCountries(2);
  console.log(list);
};

export default Delivery;
