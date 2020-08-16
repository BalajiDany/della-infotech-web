import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { useRef, useEffect } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

import reducer from './Reducer';
import { Stylings } from '../../utils/Types';
import { connectWithStore } from '../../utils/HOC';
import { State } from '../../reducers/LoginReducer';
import { signIn } from '../../actions/LoginActions';
import { createStoreWithDep } from '../../utils/Store';
import { getRefElementValue } from '../../utils/Helper';

type Props = {
    signIn: Function,
    login: State,
};

const Login = (props: Props) => {

    const emailField = useRef(null);
    const passwordField = useRef(null);

    const onSignInClick = () => {
        // Validation
        if (!emailField.current || !passwordField.current) {
            // Display Error
            return
        }

        const email = getRefElementValue(emailField);
        const password = getRefElementValue(passwordField);

        const credential = { email, password };
        props.signIn(credential);
    }

    useEffect(() => {
        if (props.login.isSuccess) {
            window.open('/home', '_self');
        }
    }, [props.login.isSuccess])

    return (
        <div className='h-100'>
            <Card style={style.loginCard} className='text-center'>
                <Card.Body>
                    <Card.Title>Login</Card.Title>
                    <Form>
                        <Form.Group controlId='formBasicEmail' className='text-left my-4'>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={emailField} type='email' placeholder='Enter email' />
                        </Form.Group>
                        <Form.Group controlId='formBasicPassword' className='text-left mb-4'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passwordField} type='password' placeholder='Password' />
                        </Form.Group>
                        <Button variant='primary' className='my-4' onClick={() => onSignInClick()}>
                            Sign In
                        </Button>
                        <Link to='/passwordReset' className='d-block'>Forgot password?</Link>
                    </Form>
                </Card.Body>
            </Card>

            <div style={style.footer} className='text-center'>
                <label>© 2020 Della Infotect. All rights reserved</label>
            </div>
        </div>
    )
};

const style: Stylings = {
    loginCard: {
        margin: 'auto',
        top: 'calc(50vh - 194px)',
        width: '24rem',
    },
    footer: {
        position: 'absolute',
        bottom: '0',
        width: '100%',
    }
}

const store = createStoreWithDep(reducer);

const mapStatetoProps = (state: any) => {
    return { login: state.login };
};

const mapDispatchToProps = { signIn };

export default connectWithStore(store, connect(mapStatetoProps, mapDispatchToProps)(Login));
