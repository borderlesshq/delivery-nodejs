import faker from '@faker-js/faker';
import Delivery from '../src';
import Business from '../src/modules/business';
import Outlet from '../src/modules/outlet';
import { getInitiationCredentials } from './data/utils';

jest.setTimeout(1000000);

let service: Outlet;
let business_service: Business;
let business_id: string;
describe('Outlet methods tests', () => {
  beforeAll(async () => {
    const credentials = await getInitiationCredentials();
    business_id = credentials.business_id;
    const delivery = new Delivery({
      token: credentials.token,
      business_id: credentials.business_id,
      role: 'User',
    });

    service = delivery.outlet;
    business_service = delivery.business;
  });

  it('should create an outlet', async () => {
    await business_service.createBusinessOperatingCountry({
      iso2: 'US',
      businessId: business_id,
      businessName: 'New Business',
      controls: { allowAppPushNotifications: true },
    });

    await business_service.createBusinessOperatingState({
      stateCode: 'AS',
      iso2: 'US',
      controls: { allowDriverPing: true },
    });

    await service.createOutlet({
      name: 'New Business',
      brandPictureURL: faker.image.imageUrl(),
      contactEmail: faker.internet.exampleEmail(),
      contactPhone: faker.phone.phoneNumber('+2349078######'),
      address: faker.address.streetAddress(true),
      country: 'United States',
      state: 'American Samoa',
    });

    // expect(response.data.success).toBeTruthy();
  });
});
