const { Account, Customer } = require('../utils/sequelize');

function accountsByCustomerNumber(customerNumber, callback) {
    Account.findAll({
        include:{
            model: Customer
        },
        where: {customer_number : customerNumber}
    }).then(
        (accounts) => {
            callback(null,accounts);
        }
    )
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
    let customerNumber = data.customer.customerNumber;
    Account.create({
        accountName: data.accountName,
        balance: data.balance,
        customer_number: customerNumber
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