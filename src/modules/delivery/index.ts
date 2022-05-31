import { FormatResponse } from "../../utils/helpers/functions";
import { ICreateDeliveriesInput } from "./interface";

class Deliveries {
  private request: any;
  constructor(request: any) {
    this.request = request;
  }

  async createDeliveries(
    payload: ICreateDeliveriesInput
  ): Promise<{ data: any; error: any }> {
    const MUTATION = `
      mutation createDeliveries($payload:CreateDeliveriesInput!){
        createDeliveries(payload:$payload){
          success,
          message,
          resultType,
          data
        }
      }
    `;

    const response = await this.request(MUTATION, { payload });

    return FormatResponse(response, "createDeliveries");
  }

  async startDelivery(deliveryId: string): Promise<{ data: any; error: any }> {
    const MUTATION = `
      mutation startDelivery($deliveryId:String!){
        startDelivery(deliveryId:$deliveryId){
          success,
          message,
          data,
          resultType,
          token
        }
      }
    `;

    const response = await this.request(MUTATION, { deliveryId });

    return FormatResponse(response, "startDelivery");
  }

  async cancelDeliveries(
    sessionId: string
  ): Promise<{ data: any; error: any }> {
    const MUTATION = `
        mutation cancelDeliveries($sessionId:String!){
          cancelDeliveries(sessionId:$sessionId){
            success,
            message,
            token,
            resultType,
            data
          }
        }
    `;

    const response = await this.request(MUTATION, { sessionId });

    return FormatResponse(response, "cancelDeliveries");
  }

  async cancelDelivery(deliveryId: string): Promise<{ data: any; error: any }> {
    const MUTATION = `
        mutation cancelDelivery($deliveryId:String!){
          cancelDelivery(deliveryId:$deliveryId){
            success,
            message,
            token
            resultType,
            data
          }
        }
    `;

    const response = await this.request(MUTATION, { deliveryId });

    return FormatResponse(response, "cancelDelivery");
  }

  async completeDriverDelivery(
    deliveryId: string
  ): Promise<{ data: any; error: any }> {
    const MUTATION = `
        mutation completeDriverDelivery($deliveryId:String!){
          completeDriverDelivery(deliveryId:$deliveryId){
            success,
            message,
            token
            resultType,
            data
          }
        }
    `;

    const response = await this.request(MUTATION, { deliveryId });

    return FormatResponse(response, "completeDriverDelivery");
  }

  async assignDeliveryDriver(
    deliveryId: string,
    driverId: string
  ): Promise<{ data: any; error: any }> {
    const MUTATION = `
        mutation assignDeliveryDriver($driverId:String! $deliveryId:String!){
          assignDeliveryDriver(driverId:$driverId deliveryId:$deliveryId){
            success,
            message,
            token
            resultType,
            data
          }
        }
    `;

    const response = await this.request(MUTATION, { deliveryId, driverId });

    return FormatResponse(response, "assignDeliveryDriver");
  }
}

export default Deliveries;
