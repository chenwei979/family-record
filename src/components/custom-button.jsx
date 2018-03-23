import React from 'react';
import $ from 'jquery';
import {permissonHOC} from "../util";

@permissonHOC(5, 4)
export default class CustomButton extends React.Component {
    onClick() {
        $.post("/api/compile", {
            id: "chenwei_979",
            script: `window.alert("Bruce Chen")`,
            contentType: "js",
            syntax: "babel",
            version: "default",
        });
        window.alert("Bruce Chen");
    }

    render() {
        return <div onClick={this.onClick.bind(this)}>click here</div>;
    }
}