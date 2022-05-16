import Delivery from "../src";
import Account from "../src/modules/account";
import {
  AccountSetupDetails,
  instancePayload,
  registered_user,
} from "./data/test.data";

jest.setTimeout(10000);

let service: Account;

let email: string;
let token: string;

describe("Account methods tests", () => {
  beforeAll(async () => {
    const delivery = new Delivery(instancePayload);

    service = delivery.account;
  });

  it("should setup an account", async () => {
    const response = await service.setupAccount(AccountSetupDetails);

    // console.log(response);

    (email = response.data.data.email),
      (token = response.data.data.emailVerificationToken);

    expect(response.data).toBeDefined();
  });

  it("should verify user account", async () => {
    const response = await service.verifyAccount(email, token);

    expect(response.data).toBeDefined();
  });

  it("should fetch user account", async () => {
    const response = await service.fetchAccount();

    // console.log(response);

    expect(response.data).toBeDefined();

    expect(response.data.email).toBe(registered_user.email);
  });
});
