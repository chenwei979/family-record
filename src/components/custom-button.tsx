import * as React from 'react';
import {connect} from 'react-redux';
import {AppLocale} from "../locales";
import axios from 'axios';
import {permissionHOC} from '../util';
import {CountAction} from '../redux/action-types';

export interface CustomButtonProps {
    total: number
    onClickAdd: () => void;
    onClickDecrease: () => void;
}

// @permissionHOC(5, 4)
// @connect((state: any) => {
//     return {
//         total: state.counter.total
//     };
// })
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
        return <div>
            <button onClick={this.props.onClickAdd.bind(this)}>
                {MmGlobal.intl.formatMessage({id: AppLocale.AppCustomButtonTitle})}
            </button>
            <button onClick={this.props.onClickDecrease.bind(this)}>
                {MmGlobal.intl.formatMessage({id: AppLocale.AppCustomButtonTitle})}
            </button>
            <div>{this.props.total}</div>
        </div>;
    }
}

const WrappedCustomButton = permissionHOC(5, 4)(CustomButton);

const mapStateToProps = (state: any) => {
    return {total: state.counter.total};
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClickAdd: () => {
            dispatch(CountAction.add(6));
        },
        onClickDecrease: () => {
            dispatch(CountAction.decrease(3));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(WrappedCustomButton);