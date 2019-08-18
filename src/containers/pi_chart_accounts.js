import * as React from "react";
import {Chart} from "react-google-charts";
import {connect} from "react-redux";
import Moment from 'moment';

const pieOptions = {
    title: "Maturity Amounts",
    pieHole: 0.6,
    legend: {
        title: "welcome",
        position: "bottom",
        alignment: "center",
        textStyle: {
            color: "233238",
            fontSize: 25
        }
    },
    slices: {
        1: {offset: 0.2},
        2: {offset: 0.1},
        3: {offset: 0.3}
    },
    is3D: true,
    tooltip: {
        showColorCode: true
    },
    chartArea: {
        left: 0,
        top: 50,
        width: "100%",
        height: "80%"
    },
    fontName: "Roboto",
    fontSize: 20
};

class PiChart extends React.Component {
    state = {
        chartImageURI: ""
    };

    render() {
        return (
            <div>
                <Chart
                    chartType="PieChart"
                    data={this.getMaturityPiChartData()}
                    options={pieOptions}
                    graph_id="PieChart"
                    width={"500px"}
                    height={"500px"}
                    legend_toggle
                />
                <h3>Total Maturity Amount
                    <b>:{this.props.accounts.map((a) => a.maturityAmount).reduce((t, c) => parseInt(t) + parseInt(c))}</b>
                </h3>
            </div>
        );
    }

    getMaturityPiChartData() {
        Moment.locale('en');
        let columns = [];
        columns.push(['MaturityYear', 'MaturityAmount']);
        this.props.accounts.forEach((account) => {
            const year = Moment(account.maturityDate, 'DD-MM-YYYY').format('YYYY');
            const amount = account.maturityAmount;
            let exists = false;
            columns.forEach((c) => {
                if (c[0] === year) {
                    c[1] = parseInt(c[1]) + parseInt(amount);
                    exists = true;
                }
            });
            if (!exists) {
                columns.push([year, +amount]);
            }
        });
        return columns.sort((a, b) => a[0] - b[0]);
    }
}

function mapStToProp(state) {
    return {accounts: state.accounts}
}

export default connect(mapStToProp)(PiChart);