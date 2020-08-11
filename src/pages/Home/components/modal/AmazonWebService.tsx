import React from 'react';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';
import { Stylings } from '../../../../utils/Types';

export interface AmazonWebServiceProps {
    show: boolean,
    onHide: () => void,
    onSignIn: () => void,
};

// TODO Fetch the Data from the form on submit click
const AmazonWebService = (props: AmazonWebServiceProps) => {
    return (
        <Modal show={props.show} onHide={props.onHide} backdrop='static' keyboard={false} size='lg' style={style}>
            <Modal.Header closeButton>
                <Modal.Title className='di-tx-primary'>AWS</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {
                        ['Access Key', 'Secrete Key'].map((fieldLabel, index) => (
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
        top:'10rem',
};

export default AmazonWebService;