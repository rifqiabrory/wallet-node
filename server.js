import Express from 'express';
import bodyParser from 'body-parser';
const customerRoute = require('./routes/customer-route');
const accountRoute = require('./routes/account-route');
const walletRoute = require('./routes/wallet-route');
const transactionRoute = require('./routes/transaction-route');
const app = Express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//routes
customerRoute(app);
accountRoute(app);
walletRoute(app);
transactionRoute(app);

app.listen(3000, () => console.log('Application started on port 3000'));