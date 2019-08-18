import React, {Component} from "react";
import {connect} from "react-redux";
import {selectAccount} from '../actions/index';
import {bindActionCreators} from 'redux';
import ReactTable from 'react-table';
import {CSVLink} from 'react-csv';

class AccountList extends Component {
    render() {
        return (
            <div style={{padding: '50px'}}>
                <ReactTable columns={this.props.accountColumns}
                            filterable
                            defaultPageSize={25}
                            defaultFilterMethod={(filter, row) => String(row[filter.id]) === filter.value}
                            data={this.props.accounts}
                />
                <div align={"center"}><CSVLink data={this.props.accounts}>Export Data To CSV File</CSVLink></div>
            </div>)
    }
}

function mapStToProp(state) {
    return {accounts: state.accounts, accountColumns: state.accountColumns}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectAccount: selectAccount}, dispatch)
}

export default connect(mapStToProp, mapDispatchToProps)(AccountList);