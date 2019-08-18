import React, {Component} from 'react';
import {connect} from 'react-redux';

class PurchaseYearDetail extends Component {
    render() {
        return this.props.year
            ?
            <div><b>Snapshot </b>{this.props.year.value}</div>
            :
            <div>Please select a year to display details.</div>
    }
}

function mapStatToProp(state) {
    return {year: state.activeYear};
}

export default connect(mapStatToProp)(PurchaseYearDetail);