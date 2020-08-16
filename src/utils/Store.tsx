import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from "redux";

export const createStoreWithDep = (reducer: any) => {
    return createStore(reducer, applyMiddleware(thunk));
};

