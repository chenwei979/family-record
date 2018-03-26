import * as React from 'react';
import {render} from 'react-dom';
import {FormattedMessage} from 'react-intl';
import {AppLocale} from "./locales";
import {AppContainer} from './app-container';
import {CustomButton} from './components';

import './style/app.less';

class Application extends React.Component {
    render() {
        return <AppContainer>
            <h1>
                <FormattedMessage id={AppLocale.AppTitle}/>
            </h1>
            <CustomButton></CustomButton>
        </AppContainer>;
    }
}

render(<Application/>, document.getElementById('app_content'));