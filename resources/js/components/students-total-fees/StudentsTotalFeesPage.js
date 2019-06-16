import React from 'react';
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import styled from 'styled-components';
import {PageTitle} from "../shared-components/PageTitle";

export default class StudentsTotalFeesPage extends React.Component{
    constructor(props) {
        super(props);

        this.renderRows = this.renderRows.bind(this);
    }

    renderRows() {
        const rows = feeRecords.map((row, index) => (
            <tr key={index}>
                <td>{row.id}</td>
                <td>{row.firstname + ' ' + row.lastname}</td>
                <td>{row.fees_total}</td>
            </tr>
        ));

        return rows;
    }

    render() {
        return (
            <Container>
                <CenteredDiv>
                    <PageTitle>Students' Payment Records</PageTitle>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Student ID Number</th>
                                <th>Student Name</th>
                                <th>Total Fees Paid</th>
                            </tr>
                        </thead>
                        <tbody>{this.renderRows()}</tbody>
                    </Table>
                </CenteredDiv>
            </Container>
        );
    }
}

const CenteredDiv = styled.div`
    margin: auto;
    width: 50%;
    padding-top: 30px;
`;