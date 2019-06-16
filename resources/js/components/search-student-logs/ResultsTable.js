import React from 'react';
import Table from "react-bootstrap/Table";

export default class ResultsTable extends React.Component {
    constructor(props) {
        super(props);

        this.renderRows = this.renderRows.bind(this);
    }

    renderRows() {
        const feesTransactionsRows = this.props.results.map((transaction, index) => (
            <tr key={index}>
                <td>{transaction['created_at']}</td>
                <td>{transaction.amount}</td>
            </tr>
        ));

        return feesTransactionsRows;
    }

    render() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Date of Payment</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </Table>
        );
    }
}