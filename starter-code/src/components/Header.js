import React, { Component } from "react";
// import Home from "./Home";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <span role="img" aria-label="house">&#127968;</span>
        </Link>
      </div>
    );
  }
}

export default Header;
