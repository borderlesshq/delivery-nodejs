import { DeliveryOptionsInterface } from "./interfaces";
import "isomorphic-unfetch";
import BaseService from "./utils/helpers/BaseService";
import Misc from "./modules/misc";
import Business from "./modules/business";
import Account from "./modules/account";
import Authentication from "./modules/authentication";
import Customer from "./modules/customer";
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
  authentication: Authentication = new Authentication(this.request);
  customer: Customer = new Customer(this.request);
}

export default Delivery;
