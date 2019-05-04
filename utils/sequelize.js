const Sequelize = require('sequelize');
const CustomerModel = require('../models/customer-model');
const AccountModel = require('../models/account-model');

const sequelize = new Sequelize('db_wallet', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

//set models relation
const Customer = CustomerModel(sequelize, Sequelize);
const Account = AccountModel(sequelize, Sequelize);

Account.belongsTo(Customer, {foreignKey:'customerNumber'});
Customer.hasMany(Account, {foreignKey:'customerNumber', as:'account'});


module.exports = {
    Customer,
    Account
};