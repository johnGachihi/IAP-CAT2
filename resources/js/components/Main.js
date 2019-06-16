import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Home from './Home';
import StudentRegistration from './registration/StudentRegistration';
import FeesPaymentPage from './fee-payment/FeesPaymentPage';
import SearchStudentLogsPage from "./search-student-logs/SearchStudentLogsPage";
import StudentsTotalFeesPage from "./students-total-fees/StudentsTotalFeesPage";

export default class Main extends Component {
    render() {
        return (
            <div className={"w-50 m-auto"}>
                <NotableCenterDiv>
                    bleble
                </NotableCenterDiv>
                <a href={'student-registration'}>ble</a>
            </div>
        );
    }
}

const NotableCenterDiv = styled.div`
    background-color: green;
`;

if (document.getElementById('homepage')) {
    ReactDOM.render(<Home />, document.getElementById('homepage'));
} else if(document.getElementById('student-registration')) {
    ReactDOM.render(<StudentRegistration />, document.getElementById('student-registration'));
} else if(document.getElementById('fee-payment')) {
    const page = <FeesPaymentPage/>;
    ReactDOM.render(page, document.getElementById('fee-payment'));
} else if(document.getElementById('search-student-logs')) {
    ReactDOM.render(<SearchStudentLogsPage/>, document.getElementById('search-student-logs'));
} else if(document.getElementById('students-total-fees')) {
    ReactDOM.render(<StudentsTotalFeesPage/>, document.getElementById('students-total-fees'));
}
