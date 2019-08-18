import {combineReducers} from 'redux';
import AccountsReducer from './reducer_accounts';
import AccountColumnsReducer from './reducer_account_columns.js';
import ActiveAccountReducer from './reducer_active_account';
import YearsReducer from './reducer_years';
import ActiveYear from './reducer_active_year';

const rootReducer = combineReducers({
    accounts: AccountsReducer,
    accountColumns: AccountColumnsReducer,
    activeAccount: ActiveAccountReducer,
    years: YearsReducer,
    activeYear: ActiveYear
});

export default rootReducer;