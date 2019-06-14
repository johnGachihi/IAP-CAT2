import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container'

export default class FormContainer extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FormContainerStyled>
                <FormTitleStyled>{this.props.title}</FormTitleStyled>
                {this.props.children}
            </FormContainerStyled>
        );
    }
}

const FormContainerStyled = styled(Container)`
    width: 30%;
    margin-top: 40px;
`;

const FormTitleStyled = styled.h3`
    color: #9b9b9b;
    margin-bottom: 20px;
    text-align: center;
`;
