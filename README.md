# BorderlessHQ Nodejs SDK.

## Installation

```bash
npm i delivery-nodejs
```

## Usage

```js
import Delivery from "delivery-nodejs";

const delivery = new Delivery({
  role: "",
  token: "",
  business_id: "",
});

(async () => {
  //Login
  const response = await delivery.authentication.webLogin("email", "password");

  console.log(response);
})();
```

### Authentication

- delivery.authentication.register

- delivery.authentication.webLogin

- delivery.authentication.mobileLogin

- delivery.authentication.createIntegration

- delivery.authentication.reGenerateIntegrationAPIKeys

- delivery.authentication.reGenerateIntegrationAPIKeys

- delivery.authentication.deactivateIntegration

- delivery.authentication.activateIntegration

- delivery.authentication.getIntegrationById

- delivery.authentication.listIntegrations

- delivery.authentication.destroyIntegration
