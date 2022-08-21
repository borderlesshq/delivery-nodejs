import { FormatResponse } from '../../utils/helpers/functions';
import { role } from '../authentication/interface';
import {
  ICreateDeliveryInput,
  ICreateDropOffInput,
  ICreatePickupInput,
  IDelivery,
  IListDeliveriesInput,
} from './interface';

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

    return FormatResponse(response, 'createDeliveries');
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

    return FormatResponse(response, 'startDelivery');
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

    return FormatResponse(response, 'cancelDeliveries');
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

    return FormatResponse(response, 'cancelDelivery');
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

    return FormatResponse(response, 'completeDriverDelivery');
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

    return FormatResponse(response, 'assignDeliveryDriver');
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

    return FormatResponse(response, 'bulkCreateDeliveries');
  }

  async listDeliveries(filters: IListDeliveriesInput): Promise<{
    data: {
      data: IDelivery[];
      count: number;
      nextPageCursor: string;
      previousPageCursor: string;
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

    return FormatResponse(response, 'listDeliveries');
  }

  async getDeliveryById(id: string): Promise<{ data: IDelivery; error: any }> {
    const QUERY = `
          query getDeliveryById($id:String!){
            getDeliveryById(id:$id){
              
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
      `;

    const response = await this.request(QUERY, { id });

    return FormatResponse(response, 'getDeliveryById');
  }

  async getDeliveriesSessionBySessionId(sessionId: string): Promise<{
    data: {
      sessionId: string;
      mappingId: string;
      deliveries: IDelivery[];
      total: number;
      paid: boolean;
    };
    error: any;
  }> {
    const QUERY = `
        query getDeliveriesSessionBySessionId($sessionId:String!){
          getDeliveriesSessionBySessionId(sessionId:$sessionId){
            sessionId,
            mappingId,
            total,
            paid,
            deliveries{
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

    const response = await this.request(QUERY, { sessionId });

    return FormatResponse(response, 'getDeliveriesSessionBySessionId');
  }

  async trackSingleDeliveryTrails(filter: {
    deliveryId?: string;
    customTrackingId?: string;
    businessId?: string;
  }): Promise<{ data: IDelivery; error: any }> {
    const QUERY = `
          query trackSingleDeliveryTrails($filter:TrackSingleDeliveryTrailsInput!){
            trackSingleDeliveryTrails(filter:$filter){
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
      `;

    const response = await this.request(QUERY, { filter });

    return FormatResponse(response, 'trackSingleDeliveryTrails');
  }

  async watchBulkDeliveriesProgress(headers: {
    token: string;
    role: role;
    businessId: string;
  }): Promise<{ data: any; error: any }> {
    const SUBSCRIPTION = `
        subscription watchBulkDeliveriesProgress($headers:Headers!){
          watchBulkDeliveriesProgress(headers:$headers){
            businessId,
            businessName,
            fileURL,
            errors,
            message,
            status,
            timeCreated,
            timeUpdated
          }
        }
      `;

    const response = await this.request(SUBSCRIPTION, { headers });

    return FormatResponse(response, 'watchBulkDeliveriesProgress');
  }

  async watchPendingAssignedDeliveries(headers: {
    token: string;
    role: role;
    businessId: string;
  }): Promise<{
    data: {
      count: number;
      nextPageCursor: string;
      previousPageCursor: string;
      data: IDelivery[];
    };
    error: any;
  }> {
    const SUBSCRIPTION = `
      subscription watchPendingAssignedDeliveries($headers:Headers!){
        watchPendingAssignedDeliveries(headers:$headers){
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

    const response = await this.request(SUBSCRIPTION, { headers });

    return FormatResponse(response, 'watchPendingAssignedDeliveries');
  }

  async createDropOffs(
    payload: ICreateDropOffInput
  ): Promise<{ data: any; error: any }> {
    const MUTATION = `
        mutation createDropOffs($payload:CreateDropOffInput!){
          createDropOffs(payload:$payload){
            success,
            message,
            toke,
            resultType,
            data
          }
        }
    `;

    const response = await this.request(MUTATION, { payload });

    return FormatResponse(response, 'createDropOffs');
  }

  /**
   *
   * @param payload array of drop off ids
   * @returns
   */
  async removeDropOffs(
    payload: [id: string]
  ): Promise<{ data: any; error: any }> {
    const MUTATION = `
        mutation removeDropOffs($payload:[String!]!){
          removeDropOffs(payload:$payload){
            success,
            message,
            token,
            resultType,
            data
          }
        }
    `;

    const response = await this.request(MUTATION, { payload });

    return FormatResponse(response, 'removeDropOffs');
  }

  async createPickups(
    payload: ICreatePickupInput
  ): Promise<{ data: any; error: any }> {
    const MUTATION = `
        mutation createPickups($payload:CreatePickupInput!){
          createPickups(payload:$payload){
            success,
            message,
            toke,
            resultType,
            data
          }
        }
    `;

    const response = await this.request(MUTATION, { payload });

    return FormatResponse(response, 'createPickups');
  }

  /**
   *
   * @param payload array of pick up ids
   * @returns
   */
  async removePickups(
    payload: [id: string]
  ): Promise<{ data: any; error: any }> {
    const MUTATION = `
        mutation removePickups($payload:[String!]!){
          removePickups(payload:$payload){
            success,
            message,
            token,
            resultType,
            data
          }
        }
    `;

    const response = await this.request(MUTATION, { payload });

    return FormatResponse(response, 'removePickups');
  }
}

export default Deliveries;
