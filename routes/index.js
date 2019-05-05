//add routes
import CustomerRouter from './customer-route';
import AccountRouter from './account-route';
import WalletRouter from './wallet-route'; 
import NotFound from './not-found';

const Routes = [
    CustomerRouter,
    AccountRouter,
    WalletRouter,
    NotFound
]

export default Routes;