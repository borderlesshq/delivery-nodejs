import {
  cacheExchange,
  CombinedError,
  createClient,
  dedupExchange,
  errorExchange,
} from "@urql/core";
import { DeliveryOptionsInterface } from "../../interfaces";
import "isomorphic-unfetch";
class BaseService {
  private payload: DeliveryOptionsInterface;
  constructor(payload: DeliveryOptionsInterface) {
    this.payload = payload;
  }

  // protected request() {
  //   const { token, business_id, role } = this.payload;
  //   return createClient({
  //     url: "https://staging-apis.borderless.delivery/graphql",
  //     fetchOptions: () => {
  //       return {
  //         headers: {
  //           Authorization: token ? `Bearer ${token}` : "",
  //           "x-entity-role": role,
  //           "x-business-id": business_id,
  //           "Content-Type": "application/json",
  //           Accept: "application/json",
  //         },
  //       };
  //     },
  //     exchanges: [
  //       // devtoolsExchange,
  //       dedupExchange, // prevent from sending duplicate queries to api
  //       cacheExchange, // document cache, to be changed for normalized cache
  //       errorExchange({
  //         onError(error) {
  //           console.error(error);
  //         },
  //       }),
  //     ],
  //   });
  // }

  protected request = async (query, variables) => {
    const { token, business_id, role } = this.payload;

    return await fetch("http://staging-apis.borderless.delivery/graphql", {
      method: "POST",
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
        "x-entity-role": role,
        "x-business-id": business_id,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    }).then((r) => r.json());
  };
}

export default BaseService;
