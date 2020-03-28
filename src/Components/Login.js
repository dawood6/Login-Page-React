import React, { Fragment, Component } from "react";
import HigherOrderComponent from "./HOC";
import Home from "./Another-Componenets/Home";
import About from "./Another-Componenets/About";
import Contact from "./Another-Componenets/Contact";
import findStore from "./Another-Componenets/Find-Store";
import Nav from "./Another-Componenets/Nav";
import { withRouter } from "react-router-dom";
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
    } if (username === "" && password === "") {
      alert("Please Enter Your Username And Password")
    }
     else {
      alert("incorrect");
    }
  };

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
        <button type="submit" onClick={this.onClick}>
          click
        </button>
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
      </Fragment>
    );
  }
}

export default withRouter(Login);
