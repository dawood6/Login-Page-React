import React, { Fragment, Component } from "react";
import { withRouter } from "react-router";
class Login extends Component {
  state = {
    username: "",
    password: "",
    isLoggedIn: false
  };

  handleChangeUsername = event => {
    this.setState({ username: event.target.value });
  };
  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  };


onClick = () => {
let {username , password} = this.state
if (username === 'dawood6' && password === 'dawood123'){
  this.props.history.push('/App')
  
} else {
    alert('incorrect')
}

}
  render() {
    return (
      <Fragment>
        <input
          type="text"
          className="username"
          value={this.state.username}
          onChange={this.handleChangeUsername}
        />
        <input
          type="password"
          className="password"
          value={this.state.password}
          onChange={this.handleChangePassword}
        />
        <button type="submit" onClick={this.onClick}>click</button>
        {console.log(this.state.password)}
      </Fragment>
    );
  }
}

export default Login;
