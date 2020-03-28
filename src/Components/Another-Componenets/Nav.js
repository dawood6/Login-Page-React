import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
export default class Nav extends Component {
  render() {
    return (
      <Fragment>
        <nav>
          <ul>
            <Link to="/home">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
            <Link to="/find-store">
              <li>Find Store</li>
            </Link>
          </ul>
        </nav>
      </Fragment>
    );
  }
}
