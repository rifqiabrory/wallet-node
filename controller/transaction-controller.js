const response = require('../utils/response');
const transactionDao = require('../dao/transaction-dao');

exports.list = function (req, res) {
    transactionDao.lists(req.params['accountNumber'], function (error, result) {
        if (error) {
            response.failed(res, error);
        } else if (result) {
            response.success(res, result);
        } else if (!result) {
            response.notFound(res, result);
        } else {
            response.exists(res, `Account Number ${req.params.accountNumber} doesn't exists.`)
        }
    })
}

exports.topUp = function (req, res) {
    transactionDao.newTopUp(req.body, function (error, result) {
        if (error) {
            response.failed(res, error);
        } else {
            response.success(res, result);
        }
    })
}

exports.withdraw = function (req, res) {
    transactionDao.newWithdraw(req.body, function (error, result) {
        if (error) {
            response.failed(res, error);
        } else {
            response.success(res, result);
        }
    })
}

exports.transfer = function (req, res) {
    transactionDao.newTransfer(req.body, function (error, result) {
        if (error) {
            response.failed(res, error);
        } else {
            response.success(res, result);
        }
    })
}