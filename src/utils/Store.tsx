import { createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk';

export const createStoreWithDep = (reducer: any) => {
    return createStore(reducer, applyMiddleware(thunk));
};

