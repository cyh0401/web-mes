import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, userInfo, ...rest }) => (
    <Route {...rest} render={props =>
        userInfo
            ? (<Component {...props} />)
            : (<Redirect to={{ pathname: "/login", state: { from: props.location } }} />)
    } />
);

const mapStateToProps = (state) => ({
    userInfo: state.login.userInfo
});

const connectedPrivateRoute = connect(mapStateToProps)(PrivateRoute);
export { connectedPrivateRoute as PrivateRoute }