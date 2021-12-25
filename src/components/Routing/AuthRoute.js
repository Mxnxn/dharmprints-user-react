import React from "react";
import { Route, Redirect } from "react-router-dom";
import { SIGNIN } from "routes";

const AuthRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={(props) => (window.localStorage.getItem("_t") ? <Component {...props} /> : <Redirect to={SIGNIN.path} />)} />;
};
export default AuthRoute;
