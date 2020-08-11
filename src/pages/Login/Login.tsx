import React from 'react';
import { connectWithStore } from '../../utils/HOC';
import { createStoreWithDep } from '../../utils/Store';
import reducer from './Reducer';
import { signIn } from '../../actions/Login';
import { connect } from 'react-redux';

const Login = () => {
    return (
        <div>
            Login Page.
        </div>
    )
}

const store = createStoreWithDep(reducer);

const mapStatetoProps = (state: any) => {
    return { login: state.login };
};

const mapDispatchToProps = { signIn };

export default connectWithStore(store, connect(mapStatetoProps, mapDispatchToProps)(Login));
