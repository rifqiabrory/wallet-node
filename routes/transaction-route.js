module.exports = function (app) {
    const Transaction = require('../controller/transaction-controller');
    //set URI_REQUEST
    const URI_REQUEST_TOPUP_TRANSACTION = '/topup';
    const URI_REQUEST_WITHDRAW_TRANSACTION = '/withdraw';
    const URI_REQUEST_TRANSFER_TRANSACTION = '/transfer';
    // set route
    app.route(URI_REQUEST_TOPUP_TRANSACTION)
        .post(Transaction.topUp);
    app.route(URI_REQUEST_WITHDRAW_TRANSACTION)
        .post(Transaction.withdraw);
    app.route(URI_REQUEST_TRANSFER_TRANSACTION)
        .post(Transaction.transfer);
}