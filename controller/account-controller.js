const response = require('../utils/response');
const accountDao = require('../dao/account-dao');

exports.lists = function (req, res) {
    accountDao.accountsByCustomerNumber(req.params['customerNumber'], function (error, result) {
        if (error) {
            response.failed(res, error);
        } else if (result) {
            response.success(res, result);
        } else if (!result) {
            response.notFound(res, result);
        } else {
            response.exists(res, `Customer Number ${req.params.custommerNumber} doesn't exists.`)
        }
    })
}

exports.detail = function (req, res) {
    accountDao.detailAccount(req.params['accountNumber'], function (error, result) {
        if (error) {
            response.failed(res, error)
        } else if (result) {
            response.success(res, result);
        } else {
            response.notFound(res, `Account Number ${req.params.accountNumber} doesn't exists.`);
        }
    })
}

exports.create = function (req, res) {
    accountDao.insert(req.body, function (error, result) {
        if (error) {
            response.failed(res, error);
        } else {
            response.success(res, result);
        }
    })
}

exports.update = function (req, res) {
    accountDao.updateAccount(req.params['accountNumber'], req.body, function (error, result) {
        if (error) {
            response.failed(res, error);
        } else if (result) {
            response.success(res, result);
        } else {
            response.notFound(res, `Account Number ${req.params.accountNumber} doesn't exists.`);
        }
    })
}

exports.delete = function (req, res) {
    accountDao.remove(req.params['accountNumber'], function (error, result) {
        if (error) {
            response.failed(res, error);
        } else if (result) {
            response.success(res, result);
        } else {
            response.notFound(res, `Account Number ${req.params.accountNumber} doesn't exists.`);
        }
    })
}