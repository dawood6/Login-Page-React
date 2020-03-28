import React, { Component } from "react";
import HigherOrderComponent from "./HOC";
import Home from "./Another-Componenets/Home";
import About from "./Another-Componenets/About";
import Contact from "./Another-Componenets/Contact";
import findStore from "./Another-Componenets/Find-Store";
import Nav from "./Another-Componenets/Nav";
import { withRouter } from "react-router-dom";
import './Login.css'
class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChangeUsername = event => {
    this.setState({ username: event.target.value });
  };
  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  onClick = () => {
    let { username, password } = this.state;
    if (username === "dawood6" && password === "dawood123") {
      this.props.loginUser();
      this.props.history.push("/home");
    } else {
      alert("incorrect");
    }
  };

  render() {
    return (
      <div>
        <h1>React Login</h1>
      <div id='main'>
        <form>
        <input
          id='username'
          type="text"
          className="username"
          value={this.state.username}
          onChange={this.handleChangeUsername}
          autoComplete='off'
        />
        <input
          id='password'
          type="password"
          className="password"
          value={this.state.password}
          onChange={this.handleChangePassword}
          autoComplete='off'
        />
        <button type="submit" onClick={this.onClick}>
          Login
        </button>
        </form>
        {console.log(this.state.password)}

        <HigherOrderComponent
          isLoggedIn={this.state.isLoggedIn}
          component={Nav}
        />
        <HigherOrderComponent
          isLoggedIn={this.state.isLoggedIn}
          component={Home}
        />
        <HigherOrderComponent
          isLoggedIn={this.state.isLoggedIn}
          component={About}
        />
        <HigherOrderComponent
          isLoggedIn={this.state.isLoggedIn}
          component={Contact}
        />
        <HigherOrderComponent
          isLoggedIn={this.state.isLoggedIn}
          component={findStore}
        />
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
