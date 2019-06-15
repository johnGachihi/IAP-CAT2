import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FormContainer from '../FormContainer';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker/es";
import styled from 'styled-components';
import {Formik} from 'formik';
import * as Yup from 'yup';
import PostRegistrationModal from './PostRegistrationModal'
import '../css/datepicker-container.css';

const initialValues = {
    firstname: '',
    lastname: '',
    dateOfBirth: '',
    address: ''
};

export default class StudentRegistration extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            newStudent: {
                id: '',
                firstname: '',
                lastname: ''
            }
        };

        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleHideModal = this.handleHideModal.bind(this);
    }

    handleShowModal() {
        this.setState({
            showModal: true
        })
    };

    handleHideModal() {
        this.setState({
            showModal: false
        })
    };

    render(){
        return (
            <div>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, {action, resetForm}) => {
                        console.log(values);
                        postRegistrationData(values)
                            .done((data, textStatus) => {
                                this.setState({
                                    newStudent: {
                                        id: data.id,
                                        firstname: data.firstname,
                                        lastname: data.lastname
                                    }
                                });
                                resetForm(initialValues);
                                this.handleShowModal();
                            })
                            .fail((jqXHR, textStatus, errorThrown) => {
                                if (jqXHR.status === UNPROCESSABLE_ENTITY) {
                                    action.setErrors(jqXHR.responseJSON.errors)
                                }
                            })
                    }}
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
                                            isInvalid={!!props.errors.firstname && props.touched.firstname}
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
                                            isInvalid={!!props.errors.lastname && props.touched.lastname}
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
                                            dateFormat={"dd/mm/yyyy"}
                                            placeholderText={"MM/DD/YYYY"}
                                            name={"dateOfBirth"}
                                            className={`form-control ${props.errors.dateOfBirth && props.touched.dateOfBirth && 'is-invalid'}`}
                                            selected={props.values.dateOfBirth }
                                            onChange={val => {
                                                console.log("Date time changed", val);
                                                props.setFieldValue('dateOfBirth', val.getTime());
                                                console.log("props.values.dateOfBirth", props.values.dateOfBirth);
                                            }}
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
                                        isInvalid={!!props.errors.address && props.touched.address}
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
                <PostRegistrationModal
                    show={this.state.showModal}
                    onHide={this.handleHideModal}
                    name={this.state.newStudent.firstname + " " + this.state.newStudent.lastname}
                    studentID={this.state.newStudent.id}
                />
            </div>
        );
    }
}

const UNPROCESSABLE_ENTITY = 422;

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

function postRegistrationData(data) {
    return $.ajax(APP_URL + "/student", {
        method: 'post',
        data: data,
        dataType: 'json',
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        }
    });
}
