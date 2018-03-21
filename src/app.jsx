import React from 'react';
import ReactDOM from 'react-dom';

class Application extends React.Component {
    onClick() {
        window.alert("Bruce CHen");
    }

    render() {
        return (<div onClick={this.onClick.bind(this)}>
            <h1>Hello, this is dynamic script render.</h1>
        </div>);
    }
}
ReactDOM.render(<Application />, document.getElementById("app_content"));