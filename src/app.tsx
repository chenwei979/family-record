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
            <div className="container">
                <h1>
                    <FormattedMessage id={AppLocale.AppTitle}/>
                </h1>
                <CustomButton></CustomButton>
            </div>
        </AppContainer>;
    }
}

render(<Application/>, document.getElementById('app_content'));