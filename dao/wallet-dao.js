const { Wallet } = require('../utils/sequelize');

function walletsByAccountNumber(accountNumber, callback) {

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
    Wallet.create({
        description: data.description,
        customerNumber: data.customerNumber
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