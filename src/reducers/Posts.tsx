import { Action } from '../utils/Types';
import { ACTION_TYPE } from '../actions/Posts';

export interface Modal {
    id: string,
    userId: string,
    title: string,
    body: string,
};

export interface State {
    posts: Modal[],
};

export default (state: State = {} as State, action: Action): State => {
    switch (action.type) {
        case ACTION_TYPE.SET_POSTS:
            return {
                posts: action.payload,
            };
        default:
            return state;
    };
};
