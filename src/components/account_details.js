import React, {Component} from 'react';
import {connect} from 'react-redux';

class AccountDetail extends Component {
    render() {

        if (!this.props.account) {
            return <div>Please select a account to display details.</div>
        }

        return (
            <div>
                <h3>FD Details {this.props.account.accountNo}</h3>
                <table>
                    <tbody>
                    <tr>
                        <td>Deposit Amount :</td>
                        <td>{this.props.account.depositAmount}</td>
                    </tr>
                    <tr>
                        <td>Maturity Date :</td>
                        <td>{this.props.account.maturityDate}</td>
                    </tr>
                    <tr>
                        <td>Maturity Amount :</td>
                        <td>{this.props.account.maturityAmount}</td>
                    </tr>
                    <tr>
                        <td>Interest Rate :</td>
                        <td>{this.props.account.interestRate}</td>
                    </tr>
                    </tbody>
                </table>
            </div>);

    }
}

function mapStatToProp(state) {
    return {account: state.activeAccount};
}

export default connect(mapStatToProp)(AccountDetail);