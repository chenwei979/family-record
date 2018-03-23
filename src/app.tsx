import * as React from "react";
import {render} from 'react-dom';
import {CustomButton} from "./components";

import './style/app.less';

class Application extends React.Component {
    onClick() {
        window.alert("Bruce Chen");
    }

    render() {
        return <div className="container" onClick={this.onClick.bind(this)}>
            <h1>Hello, this is dynamic script render.</h1>
            <CustomButton></CustomButton>
        </div>;
    }
}

render(<Application/>, document.getElementById("app_content"));