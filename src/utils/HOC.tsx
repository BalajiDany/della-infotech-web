import React, { ComponentType } from 'react'
import { Provider } from 'react-redux'
import { Store } from 'redux'

export const connectWithStore = (store: Store, ChildComponent: ComponentType) => {
    return (props: {}) => (
        <Provider store={store}>
            <ChildComponent {...props} />
        </Provider>
    )
}
