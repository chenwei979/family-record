import React from 'react';

export function permissionHOC(currentPermissionLevel, minPermissionLevel) {
    return function (WrappedComponent) {
        return class HOC extends React.Component {
            render() {
                if (currentPermissionLevel >= minPermissionLevel) {
                    return <WrappedComponent></WrappedComponent>;
                }
                else {
                    return null;
                }
            }
        }
    }
}