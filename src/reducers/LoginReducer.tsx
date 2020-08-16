import { Action } from '../utils/Types';
import { ACTION_TYPE } from '../actions/LoginActions';

export interface Modal {
    email: string,
    password: string,
    // TODO: Replace it with auth token.
};

export interface State {
    credential?: Modal,
    isSuccess?: boolean,
};

export default (state: State = {} as State, action: Action): State => {
    switch (action.type) {
        case ACTION_TYPE.POST_SIGN_IN:
            return {
                isSuccess: action.payload.isSuccess || false,
            };
        default:
            return state;
    };
};
