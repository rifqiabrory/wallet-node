module.exports = function (app) {
    const Account = require('../controller/account-controller');
    //set url
    const URL_NEW_ACCOUNT = '/account';
    const URL_ACCOUNT_DETAIL = '/account/:accountNumber';
    const URL_ACCOUNT_UPDATE = '/account/:accountNumber';
    const URL_ACCOUNT_DELETE = '/account/:accountNumber';
    const URL_ACCOUNTS_BY_CUSTOMER_NUMBER = '/accounts/:customerNumber';
    // set route
    app.route(URL_ACCOUNTS_BY_CUSTOMER_NUMBER)
        .get(Account.lists);
    app.route(URL_ACCOUNT_DETAIL)
        .get(Account.detail);
    app.route(URL_NEW_ACCOUNT)
        .post(Account.create);
    app.route(URL_ACCOUNT_UPDATE)
        .put(Account.update);
    app.route(URL_ACCOUNT_DELETE)
        .delete(Account.delete);
}