import React, {Component} from "react";
import {connect} from "react-redux";
import {selectYear} from '../actions/index';
import {bindActionCreators} from 'redux';

class PurchaseYearList extends Component {
    renderList() {
        return this.props.years.map((year) => {
            return <li key={year.value} onClick={() => this.props.selectYear(year)}
                       className="list-group-item">{year.value}</li>
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStToProp(state) {
//whatever it returned will show up as props
//inside of PurchaseYearList
//Entire data will be available as props in your component container state
//return { asdf:'1234'}
    return {years: state.years}
}

//Anything returned from this function will end up as props on the PurchaseYearList container
function mapDispatchToProps(dispatch) {
//Whenever selectYear is called , the result should be passed to all our reducers
    return bindActionCreators({selectYear: selectYear}, dispatch)
}

//Promote Account list from a component to a container -- it needs to know about this new dispatch method, selectt account. Make it available sa a props.
export default connect(mapStToProp, mapDispatchToProps)(PurchaseYearList);