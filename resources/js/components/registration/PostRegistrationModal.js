import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


export default class PostRegistrationModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Registration Successful</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>{`Name: ${this.props.name}`}</div>
                    <div>Student ID No:
                        <strong>{this.props.studentID}</strong>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={"primary"} onClick={this.props.onHide}>OK</Button>
                </Modal.Footer>
            </Modal>
        );
    }

}