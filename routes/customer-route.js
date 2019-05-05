module.exports = function (app) {
    const Customer = require('../controller/customer-controller');
    //set URI_REQUEST
    const URI_REQUEST_NEW_CUSTOMER = '/customer';
    const URI_REQUEST_CUSTOMER_DETAIL = '/customer/:customerNumber';
    const URI_REQUEST_CUSTOMER_UPDATE = '/customer/:customerNumber';
    const URI_REQUEST_CUSTOMER_DELETE = '/customer/:customerNumber';
    const URI_REQUEST_CUSTOMERS_LIST = '/customers';
    // set route
    app.route(URI_REQUEST_CUSTOMERS_LIST)
        .get(Customer.lists);
    app.route(URI_REQUEST_CUSTOMER_DETAIL)
        .get(Customer.detail);
    app.route(URI_REQUEST_NEW_CUSTOMER)
        .post(Customer.create);
    app.route(URI_REQUEST_CUSTOMER_UPDATE)
        .put(Customer.update);
    app.route(URI_REQUEST_CUSTOMER_DELETE)
        .delete(Customer.delete);
}