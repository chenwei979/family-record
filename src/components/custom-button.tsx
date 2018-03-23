import * as React from "react";
import axios from "axios";
import {permissionHOC} from "../util";

@permissionHOC(5, 4)
export default class CustomButton extends React.Component {
    async onClick() {
        let response = await axios.post("/api/compile", {
            method: 'POST',
            body: {
                id: "chenwei_979",
                script: `window.alert("Bruce Chen")`,
                contentType: "js",
                syntax: "babel",
                version: "default",
            }
        });

        console.log(response);
    }

    render() {
        return <div onClick={this.onClick.bind(this)}>click here</div>;
    }
}