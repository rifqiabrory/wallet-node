const response = require('../utils/response');
const customerDao = require('../dao/customer-dao');

exports.lists = function (req, res) {
    let filter = {};
    if (req.query.customerNumber) {
        filter.customerNumber = req.query.customerNumber;
    }
    else if (req.query.firstName) {
        filter.firstName = req.query.firstName;
    }

    customerDao.getAll(function (error, result) {
        if (error) {
            response.failed(res, error);
        } else {
            response.success(res, result);
        }
    }, filter
    );
}

exports.detail = function (req, res) {
    customerDao.detailCustomer(req.params['customerNumber'], function (error, result) {
        if (error) {
            response.failed(res, error);
        } else if (result) {
            response.success(res, result);
        } else {
            response.notFound(res, `Customer Number ${req.params.customerNumber} doesn't exists.`);
        }
    })
}

exports.create = function (req, res) {
    customerDao.insert(req.body, function (error, result) {
        if (error) {
            response.failed(res, error);
        } else {
            response.success(res, result);
        }
    })
}

exports.update = function (req, res) {
    customerDao.updateCustomer(req.params['customerNumber'], req.body, function (error, result) {
        if (error) {
            response.failed(res, error);
        } else if (result) {
            response.success(res, result);
        } else {
            response.notFound(res, `Account  Number ${req.params.customerNumber} doesn't exists.`);
        }
    })
}

exports.delete = function (req, res) {
    customerDao.remove(req.params['customerNumber'], function (error, result) {
        if (error) {
            response.failed(res, error);
        } else if (result) {
            response.success(res, result);
        } else {
            response.notFound(res, `Account Number ${req.params.customerNumber} doesn't exists.`);
        }
    })
}