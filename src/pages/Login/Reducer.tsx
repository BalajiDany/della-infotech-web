import { combineReducers } from 'redux';

import loginReduce from '../../reducers/Login';

export default combineReducers({ login: loginReduce });
