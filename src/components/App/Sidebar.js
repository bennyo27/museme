import React, { Component } from "react";
import { NavLink, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../store/actions/usersActions";
import "./App.css";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <ul>
          <li>
            <NavLink exact to="/" className="button">
              <img className="logo" src={require("./museme_final.png")} />
            </NavLink>
          </li>
          <div className="sidebar-links">
            <li>
              {!this.props.user.email && (
                <a href="localhost:8888/login">Login</a>
              )}
              {this.props.user.email && (
                <a
                  onClick={() => {
                    this.props.logout();
                    this.props.history.push("/");
                  }}
                >
                  Logout
                </a>
              )}
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/explore">Explore</Link>
            </li>
            <li>
              <Link to="/follow">Follow</Link>
            </li>
          </div>
        </ul>
      </div>
    );
  }
}

// mapStateToProps
const mapStateToProps = state => {
  return {
    user: state.spotifyReducer.user
  };
};

export default connect(
  mapStateToProps,
  {
    logout
  }
)(Sidebar);
