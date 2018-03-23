import React from 'react';
import {permissionHOC} from "../util";

@permissionHOC(5, 4)
export default class CustomButton extends React.Component {
    onClick() {
        fetch("/api/compile", {
            method: 'POST',
            body: JSON.stringify({
                id: "chenwei_979",
                script: `window.alert("Bruce Chen")`,
                contentType: "js",
                syntax: "babel",
                version: "default",
            })
        }).then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
        });
    }

    render() {
        return <div onClick={this.onClick.bind(this)}>click here</div>;
    }
}