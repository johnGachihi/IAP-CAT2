import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Home from './Home';
import StudentRegistration from './StudentRegistration';

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
}
