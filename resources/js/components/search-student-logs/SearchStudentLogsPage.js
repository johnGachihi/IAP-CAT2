import React from 'react';

import SearchForm from './SearchForm';
import ResultsTable from "./ResultsTable";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

export default class SearchStudentLogsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: {
                student: {},
                feeTransactions: []
            }
        };

        this.handleResultsReceived = this.handleResultsReceived.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleResultsReceived(results) {
        console.log('onResultsReceived', results);
        this.setState({ results: results});
    }

    handleSearch() {
        this.setState({
            results: {
                student: {},
                feeTransactions: []
            }
        });
    }

    render() {
        return (
            <div>
                <SearchForm
                    onSearch={this.handleSearch}
                    onResultsReceived={this.handleResultsReceived}
                />
                <TableContainer>
                    <div>
                        {
                            'Name: ' + (this.state.results.student.firstname || '') + ' ' + (this.state.results.student.lastname || '')
                        }
                    </div>
                    <ResultsTable results={this.state.results.feeTransactions}>
                    </ResultsTable>
                </TableContainer>
            </div>
        );
    }
}

const TableContainer = styled(Container)`
    width: 50%;
    margin-top: 50px;
`;