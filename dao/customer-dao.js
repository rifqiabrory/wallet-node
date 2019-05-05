const { Customer, Account } = require('../utils/sequelize');
const bcrypt = require('bcrypt');
function getAll(callback, filter) {
    //console.log(`Filter : ${JSON.stringify(filter)}`);
    Customer.findAll({
        include: [{
            model: Account,
            as: 'account'
        }],
        where: filter
    }).then(
        (customers) => {
            callback(null, customers);
        }
    )
}

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

function remove(customerNumber, callback) {
    Customer.destroy({
        where: { customerNumber: customerNumber }
    }).then(
        (customer) => {
            callback(null, customer);
        }
    )
}

module.exports = {
    getAll,
    detailCustomer,
    insert,
    updateCustomer,
    remove
};