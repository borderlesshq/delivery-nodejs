import {
  cacheExchange,
  CombinedError,
  createClient,
  dedupExchange,
  errorExchange,
} from "@urql/core";
import { RolesEnum } from "../../enums/index";
import { DeliveryOptionsInterface } from "../../interfaces";
import "isomorphic-unfetch";
class BaseService {
  private payload: DeliveryOptionsInterface;
  constructor(payload: DeliveryOptionsInterface) {
    this.payload = payload;
  }

  protected request() {
    const { token, business_id, role } = this.payload;
    return createClient({
      url: "https://staging-apis.borderless.delivery/graphql",
      fetchOptions: () => {
        return {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
            "x-entity-role": role,
            "x-business-id": business_id,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        };
      },
    });
  }

  // name = this.request().post()
}

export default BaseService;
