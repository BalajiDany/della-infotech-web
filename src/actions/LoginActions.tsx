import { Dispatch } from 'redux';

import { Action } from "../utils/Types";
import { Modal } from '../reducers/LoginReducer';
import { performLogin } from '../api/awsApi';

const ACTION_TYPE = {
    POST_SIGN_IN: 'POST_SIGN_IN',
};

export const postSignIn = (isSuccess: boolean): Action => {
    return {
        type: ACTION_TYPE.POST_SIGN_IN,
        payload: { isSuccess },
    };
};

export const signIn = (credential: Modal) => {
    // USe Credential to get the email and password
    console.log(credential);
    // Make the request and
    return (dispatch: Dispatch) => {
        performLogin(credential.email, credential.password)
            .then((res: any) => {
                const isSuccess = true; // From The Response
                dispatch(postSignIn(isSuccess));
            })
            .catch((err: any) => {
                const isSuccess = true; // From The Response
                dispatch(postSignIn(isSuccess));
                console.log(err, 'error occured');
            });
    };
};

export { ACTION_TYPE };
