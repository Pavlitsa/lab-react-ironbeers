import React, { Component } from "react";
import Home from "./Home";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <h1>&#127968;</h1>
        </Link>
      </div>
    );
  }
}

export default Header;
