module.exports = function(app){
    const Customer = require('../controller/customer-controller');
    app.route('/customers')
        .get(Customer.customers);
    app.route('/customer')
        .post(Customer.create);
    app.route('/customer')
        .get();
}