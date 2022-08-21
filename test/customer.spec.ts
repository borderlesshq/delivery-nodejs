import faker from '@faker-js/faker';
import Delivery from '../src';
import Customer from '../src/modules/customer';
import { ICreateCustomerInput } from '../src/modules/customer/interface';
import Misc from '../src/modules/misc';
import { ICountry } from '../src/modules/misc/interface';
import { getInitiationCredentials } from './data/utils';

jest.setTimeout(1000000);

let service: Customer;
let misc_service: Misc;
let countries: ICountry[];
let user_id: string;
let iso2: string;
let phone: string;
let email: string;
describe('Customer methods tests', () => {
  beforeAll(async () => {
    const credentials = await getInitiationCredentials();
    const delivery = new Delivery({
      token: credentials.token,
      business_id: credentials.business_id,
      role: 'User',
    });

    service = delivery.customer;
    misc_service = delivery.misc;

    countries = (await misc_service.listCountries(100)).data;
  });

  it('should create a customer account', async () => {
    const data: ICreateCustomerInput = {
      //   businessId: registered_user.registered_business.id,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      pictureURL: faker.image.imageUrl(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber('+2349078######'),
      iso2: countries[0].iso2,
      country: countries[0].name,
      address: faker.address.streetAddress(true),
    };

    const response = await service.createCustomer(data);

    expect(response.data).toBeTruthy();
    expect(response.data.success).toBeTruthy();

    user_id = response.data.data.id;
    (phone = response.data.data.phone),
      (iso2 = response.data.data.iso2),
      (email = response.data.data.email);
  });

  it('should update a customer account', async () => {
    const response = await service.updateCustomer({
      id: user_id,
      firstName: faker.name.firstName(),
    });

    expect(response.data).toBeTruthy(),
      expect(response.data.success).toBeTruthy();
  });

  it('should deactivate a customer account', async () => {
    const response = await service.deactivateCustomer(user_id);

    expect(response.data).toBeTruthy();
    expect(response.data.success).toBeTruthy();
  });

  it('should activate a customer account', async () => {
    const response = await service.activateCustomer(user_id);

    expect(response.data).toBeTruthy();
    expect(response.data.success).toBeTruthy();
  });

  it('should get a customer by id', async () => {
    const response = await service.getCustomerById(user_id);

    expect(response.data).toBeTruthy();
  });

  it('should get a customer by email', async () => {
    const response = await service.getCustomerByEmail(email);

    expect(response.data).toBeTruthy();
  });

  it('should get a customer by phone', async () => {
    const response = await service.getCustomerByPhone(phone, iso2);

    expect(response.data).toBeTruthy();
  });

  it('should get a list of customers', async () => {
    const response = await service.listCustomers({ limit: 10 });

    expect(response.data).toBeTruthy();
    expect(response.data.data.length).toBeGreaterThan(0);
  });
});
