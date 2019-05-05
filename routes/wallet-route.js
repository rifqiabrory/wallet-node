module.exports = function(app){
    const Wallet = require('../controller/wallet-controller');
    //set URI_REQUEST
    const URI_REQUEST_NEW_WALLET = '/wallet';
    const URI_REQUEST_WALLET_DETAIL = '/wallet/:idWallet';
    const URI_REQUEST_WALLET_UPDATE = '/wallet/:idWallet';
    const URI_REQUEST_WALLET_DELETE = '/wallet/:idWallet';
    const URI_REQUEST_WALLETS_BY_ACCOUNT_NUMBER = '/wallets/:accountNumber';
    // set route
    app.route(URI_REQUEST_WALLETS_BY_ACCOUNT_NUMBER)
        .get(Wallet.lists);
    app.route(URI_REQUEST_WALLET_DETAIL)
        .get(Wallet.detail);
    app.route(URI_REQUEST_NEW_WALLET)
        .post(Wallet.create);
    app.route(URI_REQUEST_WALLET_UPDATE)
        .put(Wallet.update);
    app.route(URI_REQUEST_WALLET_DELETE)
        .delete(Wallet.delete);
}