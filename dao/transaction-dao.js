const { Transaction, Account, TransactionType } = require('../utils/sequelize');

function lists(accountNumber, callback) {
    Transaction.findAll({
        where: {accountNumber : accountNumber}
    }).then(
        (transactions) => {
            callback(null,transactions);
        }
    )
}

function newTopUp(data, callback) {
    getBalance(data.anCredit, function (balance) {
        const result = balance + data.amount;
        updateBalance(data.anCredit, result);
    })
    Transaction.create({
        anCredit: data.anCredit,
        anDebit: 0,
        amount: data.amount,
        transactionType: data.transactionType,
        accountNumber: data.anCredit
    }).then(
        (transaction) => {
            callback(null, transaction);
        }
    )
}

function newWithdraw(data, callback) {
    getBalance(data.anDebit, function (balance) {
        const result = balance - data.amount;
        updateBalance(data.anDebit, result);
    })

    Transaction.create({
        anCredit: 0,
        anDebit: data.anDebit,
        amount: data.amount,
        transactionType: data.transactionType,
        accountNumber: data.anDebit
    }).then(
        (transaction) => {
            callback(null, transaction);
        }
    )
}

function newTransfer(data, callback) {
    getBalance(data.anDebit, function (balance) {
        const debit = balance - data.amount;
        updateBalance(data.anDebit, debit);
    });
    getBalance(data.anCredit, function (balance) {
        const credit = balance + data.amount;
        updateBalance(data.anCredit, credit);
    })
    Transaction.create({
        anCredit: data.anCredit,
        anDebit: data.anDebit,
        amount: data.amount,
        transactionType: data.transactionType,
        accountNumber: data.anDebit
    }).then(
        (transfer) => {
            callback(null, transfer);
        }
    )
}

function getBalance(accountNumber, callback) {
    Account.findOne({
        where: { accountNumber: accountNumber }
    }).then((result) => {
        callback(result.balance);
    })
}

function updateBalance(accountNumber, result) {
    Account.update({
        balance: result
    }, {
            where: { accountNumber: accountNumber }
        })
}

module.exports = {
    lists,
    newTopUp,
    newWithdraw,
    newTransfer
}