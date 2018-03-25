import * as React from 'react';
import {render} from 'react-dom';
import {AppContainer} from './app-container';
import {CustomButton} from './components';

import './style/app.less';

class Application extends React.Component {
    render() {
        return <AppContainer>
            <div className="container">
                <h1>Hello, this is dynamic script render.</h1>
                <CustomButton></CustomButton>
            </div>
        </AppContainer>;
    }
}

render(<Application/>, document.getElementById('app_content'));