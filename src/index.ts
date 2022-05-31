import { DeliveryOptionsInterface } from "./interfaces";
import "isomorphic-unfetch";
import BaseService from "./utils/helpers/BaseService";
import Misc from "./modules/misc";
import Business from "./modules/business";
import Account from "./modules/account";
import Authentication from "./modules/authentication";
import Customer from "./modules/customer";
import Driver from "./modules/driver";
import Deliveries from "./modules/delivery";
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
  driver: Driver = new Driver(this.request);
  deliveries: Deliveries = new Deliveries(this.request);
}

export default Delivery;
