import { Dispatch } from 'redux';
import { Action } from "../utils/Types";
// Dummy API
import jsonPlaceholderApi from '../api/jsonPlaceholderApi';
import { Modal } from '../reducers/Login';

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
    return (dispatch: Dispatch) => {
        jsonPlaceholderApi.get('posts')
            .then((res: any) => {
                const isSuccess = true; // From The Response 
                dispatch(postSignIn(isSuccess));
            })
            .catch((err: any) => {
                console.log(err);
            });
    };
};

export { ACTION_TYPE };
