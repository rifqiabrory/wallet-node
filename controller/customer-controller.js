const response = require('../utils/response');
const customerDao = require('../dao/customer-dao');

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

exports.login = function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    customerDao.customerLogin(username,password, function(error,result){
        if (error) {
            response.failed(res,error);
        } else if(result){
            response.success(res,result)
        }else{
            response.notFound(res, `Customer with ${username} doesn't exists.`)
        }
    })
}