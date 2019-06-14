import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FormContainer from './FormContainer';
import MyDatePicker from "./MyDatePicker";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker/es";
import styled from 'styled-components';
import {Formik} from 'formik';
import * as Yup from 'yup';

export default class StudentRegistration extends Component{
    render(){
        return (
            <Formik
                initialValues={{
                    firstname: '',
                    lastname: '',
                    dateOfBirth: ''
                }}
                onSubmit={console.log}
                validationSchema={StudentRegistrationSchema}
                render={props => (
                    <FormContainer title={"Student Registration"}>
                        <Form noValidate onSubmit={props.handleSubmit}>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        id={"firstname"}
                                        type={"text"}
                                        name={"firstname"}
                                        onChange={props.handleChange}
                                        placeholder={"First Name"}
                                        value={props.values.firstname}
                                        isInvalid={!!props.errors.firstname}
                                    />
                                    <Form.Control.Feedback type={"invalid"}>
                                        {props.errors.firstname}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type={"text"}
                                        name={"lastname"}
                                        onChange={props.handleChange}
                                        placeholder={"Last Name"}
                                        value={props.values.lastname}
                                        isInvalid={!!props.errors.lastname}
                                    />
                                    <Form.Control.Feedback type={"invalid"}>
                                        {props.errors.lastname}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>

                            <Form.Group>
                                <Form.Label>Date of Birth</Form.Label>
                                <div className={"customDatePickerWidth"}>
                                    <DatePicker
                                        placeholderText={"Student's Date of Birth"}
                                        name={"dateOfBirth"}
                                        className={`form-control ${props.errors.dateOfBirth && props.touched.dateOfBirth && 'is-invalid'}`}
                                        selected={props.values.dateOfBirth}
                                        onChange={e => props.setFieldValue('dateOfBirth', e)}
                                    />
                                </div>
                                {props.errors.dateOfBirth && props.touched.dateOfBirth && <ErrorFeedback>{props.errors.dateOfBirth}</ErrorFeedback>}

                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    type={"text"}
                                    name={"address"}
                                    onChange={props.handleChange}
                                    placeholder={"Address"}
                                    value={props.values.address}
                                    isInvalid={!!props.errors.address}
                                />
                                <Form.Control.Feedback type={"invalid"}>
                                    {props.errors.address}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Button type={"submit"} block>Register</Button>
                        </Form>
                    </FormContainer>
                )}
            />
        );
    }
}

const StudentRegistrationSchema = Yup.object().shape({
    firstname: Yup.string()
        .max(20, "Too long")
        .required("Required"),
    lastname: Yup.string()
        .max(20, "Too long")
        .required("Required"),
    dateOfBirth: Yup.string()
        .required("Required"),
    address: Yup.string()
        .min(5, "Too short")
        .max(100, "Too long")
        .required("Required"),
});

const ErrorFeedback = styled.div`
    display: block;
    width: 100%;
    margin-top: 0.25rem;
    font-size: 80%;
    color: #e3342f;
`;