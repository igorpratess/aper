import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoutes = ({ component: Component, isAuthenticated, ...rest}) => (
    <Route
        {...rest}
        render={props => (
            isAuthenticated ? <Component {...props} />  : <Redirect to='/' />
        )}
    />
);

export default PrivateRoutes;