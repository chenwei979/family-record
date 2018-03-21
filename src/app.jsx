import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
    onClick() {
        window.alert("Bruce Chen");
    }

    render() {
        return <div onClick={this.onClick.bind(this)}>click here</div>;
    }
}

class Application extends React.Component {
    onClick() {
        window.alert("Bruce Chen");
    }

    render() {
        return <div onClick={this.onClick.bind(this)}>
            <h1>Hello, this is dynamic script render.</h1>
            <CustomButton></CustomButton>
        </div>;
    }
}

ReactDOM.render(<Application/>, document.getElementById("app_content"));