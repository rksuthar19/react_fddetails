//State argument is not application's state
//this reducer is
import Moment from "moment";

export default function () {
    return (
        [{
            Header: 'AccountNo',
            accessor: 'accountNo',
            sortable: true,
            sortMethod: (a, b) => (parseInt(a) === parseInt(b)) ? 0 : parseInt(a) > parseInt(b) ? 1 : -1
        }, {
            Header: 'DepositDate',
            accessor: 'depositDate',
            sortable: true,
            sortMethod: (a, b) => (Moment(a, 'DD-MM-YYYY') === Moment(b, 'DD-MM-YYYY')) ? 0 : Moment(a, 'DD-MM-YYYY') > Moment(b, 'DD-MM-YYYY') ? 1 : -1
        },
            {
                Header: 'DepositAmount',
                accessor: 'depositAmount',
                sortable: true,
                sortMethod: (a, b) => (parseInt(a) === parseInt(b)) ? 0 : parseInt(a) > parseInt(b) ? 1 : -1
            },
            {
                Header: 'MaturityDate',
                accessor: 'maturityDate',
                sortable: true,
                sortMethod: (a, b) => (Moment(a, 'DD-MM-YYYY') === Moment(b, 'DD-MM-YYYY')) ? 0 : Moment(a, 'DD-MM-YYYY') > Moment(b, 'DD-MM-YYYY') ? 1 : -1
            },
            {
                Header: 'MaturityAmount',
                accessor: 'maturityAmount',
                sortable: true,
                sortMethod: (a, b) => (parseInt(a) === parseInt(b)) ? 0 : parseInt(a) > parseInt(b) ? 1 : -1
            },
            {
                Header: 'InterestRate',
                accessor: 'interestRate',
                sortable: true,
                sortMethod: (a, b) => (parseInt(a) === parseInt(b)) ? 0 : parseInt(a) > parseInt(b) ? 1 : -1

            }]
    );
}