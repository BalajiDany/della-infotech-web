import { combineReducers } from 'redux';

import loginReduce from '../../reducers/LoginReducer';

export default combineReducers({ login: loginReduce });
