const { Customer, Account } = require('../utils/sequelize');
const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');
const Op = Sequelize.Op

function detailCustomer(customerNumber, callback) {
    Customer.findOne({
        where: { customerNumber: customerNumber }
    }).then(
        (customer) => {
            callback(null, customer);
        }
    )
}

function insert(data, callback) {
    bcrypt.hash(data.password, 10, function (err, hash) {
        Customer.create({
            firstName: data.firstName,
            lastName: data.lastName,
            birthDate: data.birthDate,
            username: data.username,
            password: hash
        }).then(
            (customer) => {
                callback(null, customer);
            }
        )
    })
}

function updateCustomer(customerNumber, data, callback) {
    Customer.update({
        firstName: data.firstName,
        lastName: data.lastName,
        birthDate: data.birthDate,
        username: data.username,
        password: data.password
    }, {
            where: { customerNumber: customerNumber }
        }).then(
            (customer) => {
                callback(null, customer)
            }
        )
}

function customerLogin(username,password,callback){
    Customer.findOne({
        where:{
            [Op.and]:[{username:username},{password:password}]
        }
    }).then(
        (customer) => {
            callback(null,customer);
        }
    )
}

module.exports = {
    detailCustomer,
    insert,
    updateCustomer,
    customerLogin
};