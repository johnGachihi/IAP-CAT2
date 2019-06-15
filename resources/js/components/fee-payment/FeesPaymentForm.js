import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import FormContainer from './../FormContainer';
import {postData} from './../../rest/Ajax';

const UNPROCESSABLE_ENTITY = 422;

export default class FeesPaymentForm extends React.Component{
    render() {
        return (
            <FormContainer title={"Fee Payment"}>
                <Formik
                    initialValues={{
                        studentID: 100,
                        amount: 100
                    }}
                    validationSchema={FeePaymentFormSchema}
                    onSubmit={(values, {setErrors, resetForm}) => {
                        postData(APP_URL + '/fee', values)
                            .done(data => {
                                console.log(data)
                            })
                            .fail((jqXHR, textStatus, errorThrown) => {
                                if (jqXHR.status === UNPROCESSABLE_ENTITY) {
                                    setErrors(jqXHR.responseJSON.errors)
                                }
                            });
                    }}
                    render={props => (
                        <Form noValidate onSubmit={props.handleSubmit}>
                            <Form.Group>
                                <Form.Label>Student ID Number</Form.Label>
                                <Form.Control
                                    type={"text"}
                                    name={"studentID"}
                                    onChange={props.handleChange}
                                    placeholder={"Student ID Number"}
                                    value={props.values.studentID}
                                    isInvalid={!!props.errors.studentID && props.touched.studentID}
                                />
                                <Form.Control.Feedback type={"invalid"}>
                                    {props.errors.studentID}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Amount</Form.Label>
                                <Form.Control
                                    type={"text"}
                                    name={"amount"}
                                    onChange={props.handleChange}
                                    placeholder={"Amount"}
                                    value={props.values.amount}
                                    isInvalid={!!props.errors.amount && props.touched.amount}
                                />
                                <Form.Control.Feedback type={"invalid"}>
                                    {props.errors.amount}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Button type={"submit"} block>Submit</Button>
                        </Form>
                    )}
                />
            </FormContainer>
        );
    }
}

const FeePaymentFormSchema = Yup.object().shape({
    studentID: Yup.number(),
    amount: Yup.number("Invalid input")
        .positive("Amount must be positive")
});