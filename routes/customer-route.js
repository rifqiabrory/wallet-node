module.exports = function (app) {
    const Customer = require('../controller/customer-controller');
    //set url
    const URL_NEW_CUSTOMER = '/customer';
    const URL_CUSTOMER_DETAIL = '/customer/:customerNumber';
    const URL_CUSTOMER_UPDATE = '/customer/:customerNumber';
    const URL_CUSTOMER_DELETE = '/customer/:customerNumber';
    const URL_CUSTOMERS_LIST = '/customers';
    // set route
    app.route(URL_CUSTOMERS_LIST)
        .get(Customer.lists);
    app.route(URL_CUSTOMER_DETAIL)
        .get(Customer.detail);
    app.route(URL_NEW_CUSTOMER)
        .post(Customer.create);
    app.route(URL_CUSTOMER_UPDATE)
        .put(Customer.update);
    app.route(URL_CUSTOMER_DELETE)
        .delete(Customer.delete);
}