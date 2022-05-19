import { DeliveryOptionsInterface } from "../../interfaces";
import "isomorphic-unfetch";
class BaseService {
  private payload: DeliveryOptionsInterface;
  constructor(payload: DeliveryOptionsInterface) {
    this.payload = payload;
  }

  protected request = async (query: string, variables: any) => {
    const { token, business_id, role } = this.payload;

    return await fetch("https://staging-apis.borderless.delivery/graphql", {
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
