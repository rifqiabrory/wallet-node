import Express from 'express';
import bodyParser from 'body-parser';
const customerRoute = require('./routes/customer-route');
const app = Express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//routes
customerRoute(app);
app.listen(3000, () => console.log('Application started on port 3000'));