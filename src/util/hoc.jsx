import React from 'react';

export function permissionHOC(currentPermissionLevel, minPermissionLevel) {
    return function (WrappedComponent) {
        return class HOC extends React.Component {
            render() {
                if (currentPermissionLevel >= minPermissionLevel) {
                    return <WrappedComponent {...this.props}></WrappedComponent>;
                }
                else {
                    return null;
                }
            }
        }
    }
}