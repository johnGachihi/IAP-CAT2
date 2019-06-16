import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import posed from 'react-pose';

import FormContainer from './../FormContainer';
import {postData} from './../../rest/Ajax';

const UNPROCESSABLE_ENTITY = 422;

export default class FeesPaymentForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            saved: false
        }
    }

    render() {
        return (
            <FormContainer title={"Fee Payment"}>
                <Formik
                    initialValues={{
                        studentID: '',
                        amount: ''
                    }}
                    validationSchema={FeePaymentFormSchema}
                    onSubmit={(values, {setErrors, resetForm}) => {
                        postData(APP_URL + '/fee', values)
                            .done(data => {
                                console.log(data);
                                resetForm({
                                    studentID: '',
                                    amount: ''
                                });
                                this.setState({saved: true});
                                setTimeout(() => {
                                    this.setState({saved: false})
                                }, 2000);
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
                <SuccessfulSaveIndicator
                    style={{textAlign: 'center', marginTop: '10px'}}
                    pose={this.state.saved ? 'visible' : 'hidden'}
                >
                    Saved
                </SuccessfulSaveIndicator>
            </FormContainer>
        );
    }
}

const FeePaymentFormSchema = Yup.object().shape({
    studentID: Yup.number()
        .required("Student ID Number required"),
    amount: Yup.number("Invalid input")
        .required("Amount required")
        .positive("Amount must be positive")
});

const SuccessfulSaveIndicator = posed.div({
    visible: {opacity: 1},
    hidden: {opacity: 0}
});