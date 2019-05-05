module.exports = function(app){
    const Wallet = require('../controller/wallet-controller');
    //set url
    const URL_NEW_WALLET = '/wallet';
    const URL_WALLET_DETAIL = '/wallet/:idWallet';
    const URL_WALLET_UPDATE = '/wallet/:idWallet';
    const URL_WALLET_DELETE = '/wallet/:idWallet';
    const URL_WALLETS_BY_ACCOUNT_NUMBER = '/wallets/:accountNumber';
    // set route
    app.route(URL_WALLETS_BY_ACCOUNT_NUMBER)
        .get(Wallet.lists);
    app.route(URL_WALLET_DETAIL)
        .get(Wallet.detail);
    app.route(URL_NEW_WALLET)
        .post(Wallet.create);
    app.route(URL_WALLET_UPDATE)
        .put(Wallet.update);
    app.route(URL_WALLET_DELETE)
        .delete(Wallet.delete);
}