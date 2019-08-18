import * as React from "react";
import {Chart} from "react-google-charts";
import {connect} from "react-redux";
import Moment from 'moment';

class BarChart extends React.Component {
    getMaturityPiChartData() {
        Moment.locale('en');
        let columns = [];
        columns.push(['MaturityYear', 'DepositAmount', 'MaturityAmount']);
        this.props.accounts.forEach((account) => {
            columns.push([Moment(account.maturityDate, 'DD-MM-YYYY').format('DD-MM-YYYY'), +account.depositAmount, +account.maturityAmount]);
        });
        return columns.sort((a, b) => a[0] - b[0]);
    }

    render() {
        return (
            <Chart
                width={'1200px'}
                height={'300px'}
                chartType="Bar"
                loader={<div>Loading Data To Display...</div>}
                data={this.getMaturityPiChartData()}
                options={{
                    chart: {
                        title: 'Fixed Deposit Accounts',
                        subtitle: 'Graph Based On Maturity Date And Invested Amount',
                    },
                }}
                chartEvents={[
                    {
                        eventName: 'select',
                        callback: ({chartWrapper}) => {
                            const chart = chartWrapper.getChart()
                            const selection = chart.getSelection()
                            if (selection.length === 1) {
                                const [selectedItem] = selection
                                const dataTable = chartWrapper.getDataTable()
                                const {row, column} = selectedItem
                                alert(
                                    'Your Maturity Amount Is : ' +
                                    JSON.stringify({row, column, value: dataTable.getValue(row, column)})
                                    , null, 2)
                            }
                        },
                    },]}
            />
        );
    }
}

function mapStToProp(state) {
    return {accounts: state.accounts}
}

export default connect(mapStToProp)(BarChart);