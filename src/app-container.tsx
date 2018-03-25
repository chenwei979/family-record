import * as React from 'react';
import {Provider} from 'react-redux';
import {createStore, combineReducers, Reducer} from 'redux';
import {counter} from './redux/reducers';

function rootCombineReducers<S>(): Reducer<S> {
    const re = Object.assign({}, {counter});
    return combineReducers<S>(re);
}

let store = createStore(rootCombineReducers());

export class AppContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <Provider store={store}>
            {this.props.children}
        </Provider>;
    }
}