import React from 'react';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';
import { Stylings } from '../../../../utils/Types';

export interface GoogleCloudProps {
    show: boolean,
    onHide: () => void,
    onSignIn: () => void,
};

// TODO Fetch the Data from the form on submit click
const GoogleCloud = (props: GoogleCloudProps) => {
    return (
        <Modal show={props.show} onHide={props.onHide} backdrop='static' keyboard={false} size='lg' style={style}>
            <Modal.Header closeButton>
                <Modal.Title className='di-tx-primary'>Google Cloud</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {
                        ['Client Email', 'Client Id', 'Auth URI', 'Private Key', 'Private Key ID', 'Token URI', 'Type'].map((fieldLabel, index) => (
                            <Form.Group as={Row} controlId='formPlaintextEmail' key={index}>
                                <Form.Label column sm='2'>
                                    {fieldLabel}
                                </Form.Label>
                                <Col sm='10'>
                                    <Form.Control type='text' />
                                </Col>
                            </Form.Group>
                        ))
                    }
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button className='di-bg-primary m-auto' variant='primary' onClick={props.onSignIn}>Sign In</Button>
            </Modal.Footer>
        </Modal>
    );
};

const style: Stylings = {
        top:'3rem',
};

export default GoogleCloud;