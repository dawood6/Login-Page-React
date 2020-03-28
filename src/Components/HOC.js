
import React from "react";
import { Route, Redirect } from 'react-router-dom'

const HigherOrderComponent = ({ component: Component, isLoggedIn, ...rest }) => {
  return (
    <Route {...rest} render={(props) => isLoggedIn ? <Component {...props} /> : <Redirect to={{ pathname: "/" }} />} />
  )
}

export default HigherOrderComponent