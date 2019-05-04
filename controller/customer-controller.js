const response = require('../utils/response');
const customerDao = require('../dao/customer-dao');

exports.customers = function(req, res) {
    let filter = {};
    if(req.query.customerNumber){
        filter.customerNumber = req.query.customerNumber;
    }
    else if(req.query.firstName){
        filter.firstName = req.query.firstName;
    }

    customerDao.getAll(function(error, result){
        if(error){
           response.failed(res, error);
        }else{
            response.success(res, result);
        }
    }, filter
    );
}

exports.create = function(req, res) {
    customerDao.insert(req.body, function(error,result){
        if(error){
            response.failed(res,error);
        }else{
            response.success(res,result);
        }
    })
}