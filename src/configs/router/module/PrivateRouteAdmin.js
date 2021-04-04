import jwt from "jwt-decode";
import React from 'react'
import { Redirect, Route } from 'react-router-dom'

function PrivateRouteAdmin({ component: Component, ...rest }) {
    const isAuthenticated = localStorage.getItem('token')
    const decoded = jwt(isAuthenticated);
    console.log(decoded.role);

    return (
        <Route  {...rest} render={(props) => {
            if (isAuthenticated) {
                if (decoded.role === 1) {
                    return <Component  {...props} />
                }
                return <Redirect to="/" />
            } else {
                return <Redirect to="/signin" />
            }
        }
        } />
    )
}

export default PrivateRouteAdmin