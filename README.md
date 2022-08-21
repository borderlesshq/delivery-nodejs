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


### Business

- delivery.business.setupBusiness

- delivery.business.updateBusiness

- delivery.business.updateBusinessSetup

- delivery.business.createBusinessOperatingCountry

- delivery.business.updateBusinessOperatingCountry

- delivery.business.deactivateBusinessOperatingCountry

- delivery.business.activateBusinessOperatingCountry

- delivery.business.createBusinessOperatingState

- delivery.business.updateBusinessOperatingState

- delivery.business.deactivateBusinessOperatingState

- delivery.business.activateBusinessOperatingState

- delivery.business.listBusinessOperatingCountries

- delivery.business.listBusinessOperatingStates

- delivery.business.getBusinessOperatingCountryById

- delivery.business.getBusinessOperatingCountryByIso2

- delivery.business.getBusinessOperatingStateById

- delivery.business.getBusinessOperatingStateByStateCode

- delivery.business.getBusinessId

- delivery.business.listBusinesses


### Customer

- delivery.customer.createCustomer

- delivery.customer.updateCustomer

- delivery.customer.getCustomerById

- delivery.customer.listCustomers

- delivery.customer.deactivateCustomer

- delivery.customer.activateCustomer

- delivery.customer.getCustomerByEmail

- delivery.customer.getCustomerByPhone


### Account

- delivery.account.setupAccount

- delivery.account.verifyAccount

- delivery.account.fetchAccount

### App

- delivery.app.createApp

### Deliveries

- delivery.deliveries.createDelivery

- delivery.deliveries.startDelivery

- delivery.deliveries.cancelDeliveries

- delivery.deliveries.cancelDelivery

- delivery.deliveries.completeDriverDelivery

- delivery.deliveries.assignDeliveryDriver

- delivery.deliveries.bulkCreateDeliveries

- delivery.deliveries.listDeliveries

- delivery.deliveries.getDeliveryById

- delivery.deliveries.getDeliveriesSessionBySessionId

- delivery.deliveries.trackSingleDeliveryTrails

- delivery.deliveries.watchBulkDeliveriesProgress

- delivery.deliveries.watchPendingAssignedDeliveries

- delivery.deliveries.createDropOffs

- delivery.deliveries.removeDropOffs

- delivery.deliveries.createPickups

- delivery.deliveries.removePickups


### Driver

- delivery.driver.createDriver

- delivery.driver.updateDriver

- delivery.driver.deactivateDriver

- delivery.driver.activateDriver

- delivery.driver.updateDriverLocation

- delivery.driver.getDriverById

- delivery.driver.listDrivers

- delivery.driver.deleteDriver

- delivery.driver.bulkCreateDrivers

- delivery.driver.watchBulkDriverStatus


### Order

- delivery.order.createOrder

- delivery.order.updateOrder

- delivery.order.declineOrder

- delivery.order.acceptOrder

- delivery.order.deleteOrder

- delivery.order.orderReady

- delivery.order.getOrderById

- delivery.order.listOrders


### Outlet

- delivery.outlet.createOutlet

- delivery.outlet.updateOutlet

- delivery.outlet.deactivateOutlet

- delivery.outlet.activateOutlet

- delivery.outlet.getOutletById

- delivery.outlet.listOutlets

- delivery.outlet.deleteOutlet


### Miscellaneous

- delivery.misc.listCountries

- delivery.misc.listStates

- delivery.misc.getCountryByIso2

