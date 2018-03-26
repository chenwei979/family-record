import * as React from 'react';
import {Provider} from 'react-redux';
import {createStore, combineReducers, Reducer} from 'redux';
import {counter} from './redux/reducers';
import {IntlProvider, addLocaleData} from 'react-intl';
import * as en from "react-intl/locale-data/en";
import * as zh from "react-intl/locale-data/zh";
addLocaleData([...en, ...zh]);
const zhJson = require('./locales/zh.json');
const enJson = require('./locales/en.json');

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
        return <IntlProvider locale='zh' messages={zhJson}>
            <Provider store={store}>
                {this.props.children}
            </Provider>
        </IntlProvider>;
    }
}