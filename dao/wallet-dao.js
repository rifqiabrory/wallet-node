const { Wallet ,Account} = require('../utils/sequelize');

function walletsByAccountNumber(accountNumber, callback) {
    Wallet.findAll({
        include:{
            model: Account
        },
        where: {account_number : accountNumber}
    }).then(
        (wallets) => {
            callback(null,wallets);
        }
    )
}

function detailWallet(idWallet, callback) {
    Wallet.findOne({
        where: { idWallet: idWallet }
    }).then(
        (wallet) => {
            callback(null, wallet);
        }
    )
}

function insert(data, callback) {
    let accountNumber = data.account.accountNumber;
    Wallet.create({
        description: data.description,
        account_number: accountNumber
    }).then(
        (wallet) => {
            callback(null, wallet);
        }
    )
}

function updateWallet(idWallet, data, callback) {
    Wallet.update({
        description: data.description
    }, {
            where: { idWallet: idWallet }
        }).then(
            (wallet) => {
                callback(null, wallet)
            }
        )
}

function remove(idWallet, callback) {
    Wallet.destroy({
        where: { idWallet: idWallet }
    }).then(
        (wallet) => {
            callback(null, wallet);
        }
    )
}

module.exports = {
    walletsByAccountNumber,
    detailWallet,
    insert,
    updateWallet,
    remove
}