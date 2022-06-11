import Delivery from "../src";
import Account from "../src/modules/account";
import {
  AccountSetupDetails,
  instancePayload,
  registered_user,
} from "./data/test.data";
import { getInitiationCredentials } from "./data/utils";

jest.setTimeout(1000000);

let service: Account;

let email: string;
let token: string;
let account;
describe("Account methods tests", () => {
  beforeAll(async () => {
    const credentials = await getInitiationCredentials();
    account = credentials.account;
    const delivery = new Delivery({
      token: credentials.token,
      business_id: credentials.business_id,
      role: "User",
    });

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
    const response = await service.verifyAccount(
      account.email,
      account.emailVerificationToken
    );

    expect(response.data).toBeDefined();
  });

  it("should fetch user account", async () => {
    const response = await service.fetchAccount();

    // console.log(response);

    expect(response.data).toBeDefined();

    expect(response.data.email).toBe(account.email);
  });
});
