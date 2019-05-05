const { Account } = require('../utils/sequelize');

function accountsByCustomerNumber(customerNumber, callback) {

}

function detailAccount(accountNumber, callback) {
    Account.findOne({
        where: { accountNumber: accountNumber }
    }).then(
        (account) => {
            callback(null, account);
        }
    )
}

function insert(data, callback) {
    Account.create({
        accountName: data.accountName,
        balance: data.balance,
        customerNumber: data.customerNumber
    }).then(
        (account) => {
            callback(null, account);
        }
    )
}

function updateAccount(accountNumber, data, callback) {
    Account.update({
        accountName: data.accountName
    }, {
            where: { accountNumber: accountNumber }
        }).then(
            (account) => {
                callback(null, account)
            }
        )
}

function remove(accountNumber, callback) {
    Account.destroy({
        where: { accountNumber: accountNumber }
    }).then(
        (account) => {
            callback(null, account);
        }
    )
}

module.exports = {
    accountsByCustomerNumber,
    detailAccount,
    insert,
    updateAccount,
    remove
}