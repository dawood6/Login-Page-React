 import React, { Fragment, Component } from "react";
 import App from './App'

 const HigherOrderComponent = ({ isLoggedIn }) => {
    return (
      <Fragment>
        {isLoggedIn ? <App /> : <div>You are not authorized to view this component</div>}
      </Fragment>
    )
  }

  export default HigherOrderComponent