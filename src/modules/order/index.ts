import { FormatResponse } from "../../utils/helpers/functions";
import {
  IAcceptDeclineOrderInput,
  ICreateOrderInput,
  IOrder,
  IOrderFilters,
  IUpdateOrderInput,
} from "./interface";

class Order {
  private request: any;
  constructor(request: any) {
    this.request = request;
  }

  async createOrder(
    payload: ICreateOrderInput
  ): Promise<{ data: any; error: any }> {
    const MUTATION = `
            mutation createOrder($payload:CreateOrderInput!){
                createOrder(payload$payload){
                    success,
                    message,
                    token,
                    resultType,
                    data
                }
            }
        `;

    const response = await this.request(MUTATION, { payload });

    return FormatResponse(response, "createOrder");
  }

  async updateOrder(
    payload: IUpdateOrderInput
  ): Promise<{ data: any; error: any }> {
    const MUTATION = `
         mutation updateOrder($payload:UpdateOrderInput!){
            updateOrder(payload:$payload){
                success,
                message,
                token,
                resultType,
                data
            }
         }
      `;

    const response = await this.request(MUTATION, { payload });

    return FormatResponse(response, "updateOrder");
  }

  async declineOrder(
    payload: IAcceptDeclineOrderInput
  ): Promise<{ data: any; error: any }> {
    const MUTATION = `
            mutation declineOrder($paylod:OrderDecision!){
                declineOrder(payload:$payload){
                    success,
                    message,
                    token,
                    resultType,
                    data
                }
            }
      `;

    const response = await this.request(MUTATION, { payload });

    return FormatResponse(response, "declineOrder");
  }

  async acceptOrder(
    payload: IAcceptDeclineOrderInput
  ): Promise<{ data: any; error: any }> {
    const MUTATION = `
            mutation acceptOrder($paylod:OrderDecision!){
                acceptOrder(payload:$payload){
                    success,
                    message,
                    token,
                    resultType,
                    data
                }
            }
      `;

    const response = await this.request(MUTATION, { payload });

    return FormatResponse(response, "acceptOrder");
  }

  async deleteOrder(id: string): Promise<{ data: any; error: any }> {
    const MUTATION = `
            mutation deleteOrder($id:String){
                deleteOrder(id:$id){
                    success,
                    message,
                    token,
                    resultType,
                    data
                }
            }
      `;

    const response = await this.request(MUTATION, { id });

    return FormatResponse(response, "deleteOrder");
  }

  async orderReady(id: string): Promise<{ data: any; error: any }> {
    const MUTATION = `
            mutation orderReady($id:String){
                orderReady(id:$id){
                    success,
                    message,
                    token,
                    resultType,
                    data
                }
            }
      `;

    const response = await this.request(MUTATION, { id });

    return FormatResponse(response, "orderReady");
  }

  async getOrderById(id: string): Promise<{ data: IOrder; error: any }> {
    const QUERY = `
            query getOrderById($id:String!){
                getOrderById(id:$id){
                    id,
                    businessId,
                    businessName,
                    outletId,
                    outletName,
                    staffId,
                    staffName,
                    items{
                    name,
                    pictureURL,
                    quantity,
                    description,
                    weight,
                    tags
                    },
                    productCarriage,
                    amount,
                    currency,
                    status,
                    orderNote,
                    reason,
                    paymentModel,
                    paymentMethod,
                    customer{
                    senderAccountId,
                    name,
                    pictureURL,
                    email,
                    phone,
                    iso2
                    },
                    timeCreated,
                    timeUpdated
                }
            }
      `;

    const response = await this.request(QUERY, { id });

    return FormatResponse(response, "getOrderById");
  }

  async listOrders(filters: IOrderFilters): Promise<{
    data: {
      count: number;
      nextPageCursor: string;
      previousPageCursor: string;
      data: IOrder[];
    };
    error: any;
  }> {
    const QUERY = `
            query listOrders($filters:OrdersFilter!){
                listOrders(filters:$filters){
                    count,
                    nextPageCursor,
                    previousPageCursor,
                    data{
                        id,
                        businessId,
                        businessName,
                        outletId,
                        outletName,
                        staffId,
                        staffName,
                        items{
                        name,
                        pictureURL,
                        quantity,
                        description,
                        weight,
                        tags
                        },
                        productCarriage,
                        amount,
                        currency,
                        status,
                        orderNote,
                        reason,
                        paymentModel,
                        paymentMethod,
                        customer{
                        senderAccountId,
                        name,
                        pictureURL,
                        email,
                        phone,
                        iso2
                        },
                        timeCreated,
                        timeUpdated
                    }
                }
            }
      `;

    const response = await this.request(QUERY, { filters });

    return FormatResponse(response, "listOrders");
  }
}

export default Order;
