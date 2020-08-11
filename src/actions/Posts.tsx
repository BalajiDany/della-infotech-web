import { Dispatch } from 'redux';
import { Action } from "../utils/Types";
import jsonPlaceholderApi from '../api/jsonPlaceholderApi';
import { Modal } from '../reducers/Posts';

const ACTION_TYPE = {
    ADD_POST: 'ADD_POST',
    SET_POSTS: 'SET_POSTS',
    DELETE_POST: 'DELETE_POST',
};

export const setPosts = (posts: Modal[]): Action => {
    return {
        type: ACTION_TYPE.SET_POSTS,
        payload: posts
    };
};

export const syncPosts = () => {
    return (dispatch: Dispatch) => {
        jsonPlaceholderApi.get('posts')
            .then(res => {
                setTimeout(() => {
                    dispatch(setPosts(res.data.slice(0, 10) || []));
                }, 2000);
            })
            .catch(err => {
                console.log(err);
            });
    };
};

export { ACTION_TYPE };
