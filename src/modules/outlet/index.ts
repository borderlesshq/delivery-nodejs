import { FormatResponse } from '../../utils/helpers/functions';
import {
  ICreateOutletInput,
  IOutlet,
  IOutletFilters,
  IUpdateOutletInput,
} from './interface';

class Outlet {
  private request: any;
  constructor(request: any) {
    this.request = request;
  }

  async createOutlet(
    payload: ICreateOutletInput
  ): Promise<{ data: any; error: any }> {
    const MUTATION = `
        mutation createOutlet($payload:CreateOutletInput!){
            createOutlet(payload:$payload){
                success,
                message,
                token,
                resultType,
                data
            }
        }
    `;

    const response = await this.request(MUTATION, { payload });

    return FormatResponse(response, 'createOutlet');
  }

  async updateOutlet(
    payload: IUpdateOutletInput
  ): Promise<{ data: any; error: any }> {
    const MUTATION = `
        mutation   updateOutlet($payload:UpdateOutletInput!){
            updateOutlet(payload:$payload){
                success,
                message,
                token,
                resultType,
                data
            }
        }
    `;

    const response = await this.request(MUTATION, { payload });

    return FormatResponse(response, 'updateOutlet');
  }

  async deactivateOutlet(id: string): Promise<{ data: any; error: any }> {
    const MUTATION = `
            mutation deactivateOutlet($id:String){
                deactivateOutlet(id:$id){
                    success,
                    message,
                    token,
                    resultType,
                    data
                }
            }
      `;

    const response = await this.request(MUTATION, { id });

    return FormatResponse(response, 'deactivateOutlet');
  }

  async activateOutlet(id: string): Promise<{ data: any; error: any }> {
    const MUTATION = `
            mutation activateOutlet($id:String){
                activateOutlet(id:$id){
                    success,
                    message,
                    token,
                    resultType,
                    data
                }
            }
      `;

    const response = await this.request(MUTATION, { id });

    return FormatResponse(response, 'activateOutlet');
  }
  async deleteOutlet(id: string): Promise<{ data: any; error: any }> {
    const MUTATION = `
            mutation deleteOutlet($id:String){
                deleteOutlet(id:$id){
                    success,
                    message,
                    token,
                    resultType,
                    data
                }
            }
      `;

    const response = await this.request(MUTATION, { id });

    return FormatResponse(response, 'deleteOutlet');
  }

  async getOutletById(id: string): Promise<{ data: IOutlet; error: any }> {
    const QUERY = `
        query getOutletById($id:String!){
            getOutletById(id:$id){
                id,
                businessId,
                businessName,
                name,
                brandPictureURL,
                contactEmail,
                contactPhone,
                address,
                iso2,
                state,
                country,
                status,
                timeCreated,
                timeUpdated
            }
        
        }
    `;

    const response = await this.request(QUERY, { id });

    return FormatResponse(response, 'getOutletById');
  }

  async listOutlets(filters: IOutletFilters): Promise<{
    data: {
      count: number;
      nextPageCursor: string;
      previousPageCursor: string;
      data: IOutlet[];
    };
    error: any;
  }> {
    const QUERY = `
        query listOutlets($filters:OutletFilters!){
            listOutlets(filters:$filters){
                count,
                nextPageCursor,
                previousPageCursor,
                data{
                    id,
                    businessId,
                    businessName,
                    name,
                    brandPictureURL,
                    contactEmail,
                    contactPhone,
                    address,
                    iso2,
                    state,
                    country,
                    status,
                    timeCreated,
                    timeUpdated
                }
            }
        
        }
    `;

    const response = await this.request(QUERY, { filters });

    return FormatResponse(response, 'listOutlets');
  }
}

export default Outlet;
