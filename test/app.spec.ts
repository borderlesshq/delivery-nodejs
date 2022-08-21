import faker from '@faker-js/faker';
import Delivery from '../src';
import App from '../src/modules/app';
import { getInitiationCredentials } from './data/utils';

jest.setTimeout(100000);

let service: App;
describe('App methods tests', () => {
  beforeAll(async () => {
    const { token, business_id } = await getInitiationCredentials();
    const delivery = new Delivery({
      token: token,
      role: 'User',
      business_id,
    });

    service = delivery.app;
  });

  describe('createApp()', () => {
    it('should create an app', async () => {
      const response = await service.createApp({
        name: faker.name.findName(),
        splashScreenColor: 'white',
        landingLogoURL: faker.image.imageUrl(),
        landingPictureURL: faker.image.imageUrl(),
        splashScreenPictureURL: faker.image.imageUrl(),
        landingTitle: faker.name.findName(),
        iconColor: 'blue',
        iconName: faker.name.findName(),
        iconURL: faker.image.imageUrl(),
        primaryColor: 'yellow',
        secondaryColor: 'pink',
        allowRegistrations: true,
        removeHQLabel: true,
        enableAndroidBuild: true,
        enableAndroidDeployment: true,
        enableIOSDeployment: true,
        enableISOBuild: true,
        category: 'platforms',
      });

      expect(response.data).toBeDefined();
    });
  });
});
