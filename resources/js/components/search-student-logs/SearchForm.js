import React from 'react';
import FormContainer from './../FormContainer';
import {Formik} from "formik";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import {getData} from "../../rest/Ajax";

const UNPROCESSABLE_ENTITY = 422;

export default class SearchForm extends React.Component {
    render() {
        return (
            <FormContainer title={"Student Fees Payment Logs"}>
                <Formik
                    initialValues={{
                        studentID: ''
                    }}
                    onSubmit={(values, {setErrors}) => {
                        this.props.onSearch();
                        getData(APP_URL + `/fee/${values.studentID}`, {})
                            .done(data => {
                                this.props.onResultsReceived(data);
                            })
                            .fail((jqXHR, textStatus, errorThrown) => {
                                if (jqXHR.status === UNPROCESSABLE_ENTITY) {
                                    setErrors(jqXHR.responseJSON.errors)
                                }
                            })
                    }}
                    render={props => (
                        <Form noValidate onSubmit={props.handleSubmit}>
                            <Form.Row>
                                <Col xs={10}>
                                    {/*<Form.Label>Student ID Number</Form.Label>*/}
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
                                </Col>

                                <Col xs={2}>
                                    <Button type={"submit"}>Go</Button>
                                </Col>
                            </Form.Row>

                        </Form>
                    )}
                />
            </FormContainer>
        );
    }
}
