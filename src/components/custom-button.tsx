import * as React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {permissionHOC} from '../util';

export interface CustomButtonProps {
    total: number
}

// @permissionHOC(5, 4)
@connect((state: any) => {
    return {
        total: state.counter.total
    };
})
export







class CustomButton extends React.Component<CustomButtonProps, any> {
    async onClick() {
        let response = await axios.post('/api/compile', {
            method: 'POST',
            body: {
                id: 'chenwei_979',
                script: `window.alert("Bruce Chen")`,
                contentType: 'js',
                syntax: 'babel',
                version: 'default',
            }
        });

        console.log(response);
    }

    render() {
        return <div onClick={this.onClick.bind(this)}>
            <button>click here</button>
            <div>{this.props.total}</div>
        </div>;
    }
}