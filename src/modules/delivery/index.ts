import { FormatResponse } from "../../utils/helpers/functions";
import {
  ICreateDeliveryInput,
  IDelivery,
  IListDeliveriesInput,
} from "./interface";

class Deliveries {
  private request: any;
  constructor(request: any) {
    this.request = request;
  }

  /**
   * @description create a delivery
   * @param payload
   * @returns
   */
  async createDelivery(payload: ICreateDeliveryInput): Promise<{
    data: {
      success: boolean;
      message: string;
      data: IDelivery;
    };
    error: any;
  }> {
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

  async bulkCreateDeliveries(
    fileURL: string
  ): Promise<{ data: any; error: any }> {
    const MUTATION = `
        mutation bulkCreateDeliveries($fileURL:String!){
          bulkCreateDeliveries(fileURL:$fileURL){
            success,
            message,
            data,
            resultType,
            token
          }
        }
    `;
    const response = await this.request(MUTATION, { fileURL });

    return FormatResponse(response, "bulkCreateDeliveries");
  }

  async listDeliveries(filters: IListDeliveriesInput): Promise<{
    data: {
      data: IDelivery[];
      count: number;
      nextPageCursor: string;
      previousePageCursor: string;
    };
    error: any;
  }> {
    const QUERY = `
        query listDeliveries($filters:DeliveryFilters!){
          listDeliveries(filters:$filters){
            count,
            nextPageCursor,
            previousPageCursor,
            data{
              id,
              businessId,
              businessName,
              sessionId,
              mappingId,
              customTrackingId,
              requestPayment,
              paymentModel,
              paymentMethod,
              price,
              paid,
              currency,
              priceBreakdown,
              status,
              stage,
              pickupCarriage,
              pickup{
                id,
                businessId,
                sessionId,
                businessName,
                sessionId,
                mappingId,
                sender{
                  senderAccountId,
                  name,
                  pictureURL,
                  email,
                  phone,
                  iso2
                },
                location{
                  address,
                  country,
                  state,
                  iso2,
                  stateCode,
                  geometry{location
                    {lat,lng},bounds
                    {northeast{lat,lng},
                      southwest{lat,lng}},
                    viewport
                    {northeast{lat,lng},southwest{lat,lng}}}
                },
                packages{
                  id,
                  pickupId,
                  pictureURL,
                  sessionId,
                  mappingId,
                  name,
                  description,
                  quantity,
                  weight,
                  # wightUNIT,
                  tags
                },
                pickupCarriage,
                locationPrice{
                  id,
                  iso2,
                  country,
                  state,
                  stateCode,
                  name,
                  price,
                  timeCreated,
                  timeUpdated
                },
                savePickupDetails
              },
              dropOff{
                id,
                businessId,
                sessionId,
                sessionId,
                mappingId,
                recipient{
                  senderAccountId,
                  name,
                  pictureURL,
                  email,
                  phone,
                  iso2
                },
                location{
                  address,
                  country,
                  state,
                  iso2,
                  stateCode,
                  geometry{location
                    {lat,lng},bounds
                    {northeast{lat,lng},
                      southwest{lat,lng}},
                    viewport
                    {northeast{lat,lng},southwest{lat,lng}}}
                },
                pickupPackages{
                  pickupId,
                  packageId,
                  quantity
                },
                locationPrice{
                  id,
                  iso2,
                  country,
                  state,
                  stateCode,
                  name,
                  price,
                  timeCreated,
                  timeUpdated
                },
                saveDropOffLocation
              }
            }
          }
        }
    `;
    const response = await this.request(QUERY, { filters });

    return FormatResponse(response, "listDeliveries");
  }
}

export default Deliveries;
