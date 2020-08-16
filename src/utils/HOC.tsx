import { Store } from 'redux';
import { Provider } from 'react-redux';
import React, { ComponentType } from 'react';

export const connectWithStore = (store: Store, ChildComponent: ComponentType) => {
    return (props: {}) => (
        <Provider store={store}>
            <ChildComponent {...props} />
        </Provider>
    )
}
