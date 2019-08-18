import React, {Component} from 'react';
import AccountList from '../containers/account_list';
import PiChart from '../containers/pi_chart_accounts.js';
import BarChart from '../containers/bar_chart_accounts.js';

export default class App extends Component {
    render() {
        return (
            <div>
                <BarChart/>
                <AccountList/>
                <PiChart/>
                --------------------------------------------------------------------------------------------------------------------------------------------------------~Rakesh
                Kumar Suthar
            </div>
        );
    }
}
