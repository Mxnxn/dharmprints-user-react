import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ROOT } from "routes";

const RestrictRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={(props) => (window.localStorage.getItem("_t") ? <Redirect to={ROOT} /> : <Component {...props} />)} />;
};
export default RestrictRoute;
