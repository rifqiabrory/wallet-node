const response = require('../utils/response');
const walletDao = require('../dao/wallet-dao');

exports.lists = function (req, res) {
    walletDao.walletsByAccountNumber(req.params['accountNumber'], function (error, result) {
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

exports.detail = function (req, res) {
    walletDao.detailWallet(req.params['idWallet'], function (error, result) {
        if (error) {
            response.failed(res, error)
        } else if (result) {
            response.success(res, result);
        } else {
            response.notFound(res, `ID Wallet ${req.params.idWallet} doesn't exists.`);
        }
    })
}

exports.create = function (req, res) {
    walletDao.insert(req.body, function (error, result) {
        if (error) {
            response.failed(res, error);
        } else {
            response.success(res, result);
        }
    })
}

exports.update = function (req, res) {
    walletDao.updateWallet(req.params['idWallet'], req.body, function (error, result) {
        if (error) {
            response.failed(res, error);
        } else if (result) {
            response.success(res, result);
        } else {
            response.notFound(res, `ID Wallet ${req.params.idWallet} doesn't exists.`);
        }
    })
}

exports.delete = function (req, res) {
    walletDao.remove(req.params['idWallet'], function (error, result) {
        if (error) {
            response.failed(res, error);
        } else if (result) {
            response.success(res, result);
        } else {
            response.notFound(res, `ID Wallet ${req.params.idWallet} doesn't exists.`);
        }
    })
}