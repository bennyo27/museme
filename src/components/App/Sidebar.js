import React, { Component } from "react";
import { NavLink, Route, Link } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <div>
        <div className="sidebar">
          <ul>
            <li>
              <NavLink exact to="/" className="button">
                <img className="logo" />
              </NavLink>
            </li>
            <li>
              <a href="localhost:8888/login">Login</a>
            </li>
            <li>
              <Link to="/explore">Explore</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
