module.exports = function (app) {
    const Transaction = require('../controller/transaction-controller');
    //set URI_REQUEST
    const URI_REQUEST_TOPUP_TRANSACTION = '/transaction/topup';
    const URI_REQUEST_WITHDRAW_TRANSACTION = '/transaction/withdraw';
    const URI_REQUEST_TRANSFER_TRANSACTION = '/transaction/transfer';
    const URI_REQUEST_TRANSACTION_LIST = '/transactions/:accountNumber';
    // set route
    app.route(URI_REQUEST_TRANSACTION_LIST)
        .get(Transaction.list);
    app.route(URI_REQUEST_TOPUP_TRANSACTION)
        .post(Transaction.topUp);
    app.route(URI_REQUEST_WITHDRAW_TRANSACTION)
        .post(Transaction.withdraw);
    app.route(URI_REQUEST_TRANSFER_TRANSACTION)
        .post(Transaction.transfer);
}