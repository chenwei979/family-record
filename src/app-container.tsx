import * as React from 'react';
import {Provider} from 'react-redux';
import {Reducer, createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {watcher} from './redux/saga';
import {counter} from './redux/reducers';
import {IntlProvider, addLocaleData, injectIntl} from 'react-intl';
import * as en from "react-intl/locale-data/en";
import * as zh from "react-intl/locale-data/zh";

//addLocaleData([...en, ...zh]);
const zhJson = require('./locales/zh.json');
const enJson = require('./locales/en.json');
require("./util/global");
const GlobalIntlInject = injectIntl((props) => {
    MmGlobal.intl = props.intl;
    return <div className="container">{props.children}</div>;
});

function rootCombineReducers<S>(): Reducer<S> {
    const re = Object.assign({}, {counter});
    return combineReducers<S>(re);
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootCombineReducers(), applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watcher);

export class AppContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <IntlProvider locale='zh' messages={zhJson}>
            <Provider store={store}>
                <GlobalIntlInject {...this.props}/>
            </Provider>
        </IntlProvider>;
    }
}

