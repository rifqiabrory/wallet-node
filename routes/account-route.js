module.exports = function (app) {
    const Account = require('../controller/account-controller');
    //set URI_REQUEST
    const URI_REQUEST_NEW_ACCOUNT = '/account';
    const URI_REQUEST_ACCOUNT_DETAIL = '/account/:accountNumber';
    const URI_REQUEST_ACCOUNT_UPDATE = '/account/:accountNumber';
    const URI_REQUEST_ACCOUNT_DELETE = '/account/:accountNumber';
    const URI_REQUEST_ACCOUNTS_BY_CUSTOMER_NUMBER = '/accounts/:customerNumber';
    // set route
    app.route(URI_REQUEST_ACCOUNTS_BY_CUSTOMER_NUMBER)
        .get(Account.lists);
    app.route(URI_REQUEST_ACCOUNT_DETAIL)
        .get(Account.detail);
    app.route(URI_REQUEST_NEW_ACCOUNT)
        .post(Account.create);
    app.route(URI_REQUEST_ACCOUNT_UPDATE)
        .put(Account.update);
    app.route(URI_REQUEST_ACCOUNT_DELETE)
        .delete(Account.delete);
}