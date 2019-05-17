const Sequelize = require('sequelize');
//require all models
const CustomerModel = require('../models/customer-model');
const AccountModel = require('../models/account-model');
const WalletModel = require('../models/wallet-model');
const WalletAccountModel = require('../models/wallet-account-model');
const TransactionModel = require('../models/transaction-model');
const TransactionTypeModel = require('../models/transaction-type-model');



const sequelize = new Sequelize('e_wallet', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

//set models
const Customer = CustomerModel(sequelize, Sequelize);
const Account = AccountModel(sequelize, Sequelize);
const Wallet = WalletModel(sequelize, Sequelize);
const WalletAccount = WalletAccountModel(sequelize, Sequelize);
const Transaction = TransactionModel(sequelize, Sequelize);
const TransactionType = TransactionTypeModel(sequelize, Sequelize);

//set models relation
Account.belongsTo(Customer, {foreignKey:'customer_number'});
Customer.hasMany(Account, {foreignKey:'customer_number', as:'account'});

Wallet.belongsTo(Account, {foreignKey:'account_number'});
Account.hasMany(Wallet, {foreignKey:'account_number'});

//exports all models
module.exports = {
    Customer,
    Account,
    Wallet,
    WalletAccount,
    Transaction,
    TransactionType
};