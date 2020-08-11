import { combineReducers } from 'redux';

import postReducer from '../../reducers/Posts';

export default combineReducers({ home: postReducer });
