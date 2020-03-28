import React from "react";
import Login from "./Components/Login";
import Home from "./Components/Another-Componenets/Home";
import About from "./Components/Another-Componenets/About";
import Contact from "./Components/Another-Componenets/Contact";
import findStore from "./Components/Another-Componenets/Find-Store";
import Nav from "./Components/Another-Componenets/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { render } from "react-dom";
import HigherOrderComponent from "./Components/HOC";

class Index extends React.Component {
  state = {
    isLoggedIn: false
  };

  loginUser = () => this.setState({ isLoggedIn: true });
  render() {
    return (
      <div>
        <Router>
          <HigherOrderComponent
            isLoggedIn={this.state.isLoggedIn}
            exact
            component={Nav}
          />

          <Switch>
            <Route
              path="/"
              exact
              render={() => <Login loginUser={this.loginUser} />}
            />
            <HigherOrderComponent
              isLoggedIn={this.state.isLoggedIn}
              path="/home"
              exact
              component={Home}
            />
            <HigherOrderComponent
              isLoggedIn={this.state.isLoggedIn}
              path="/about"
              exact
              component={About}
            />
            <HigherOrderComponent
              isLoggedIn={this.state.isLoggedIn}
              path="/contact"
              exact
              component={Contact}
            />
            <HigherOrderComponent
              isLoggedIn={this.state.isLoggedIn}
              path="/find-store"
              exact
              component={findStore}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

render(<Index />, document.getElementById("root"));
