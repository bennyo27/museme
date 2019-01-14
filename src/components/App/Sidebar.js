import React, { Component } from "react";
import { NavLink, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../store/actions/usersActions";

class Sidebar extends Component {
  render() {
    return (
      <div>
        {console.log("Hello", this.props.user)}
        <div className="sidebar">
          <ul>
            <li>
              <NavLink exact to="/" className="button">
                <img className="logo" />
              </NavLink>
            </li>
            <li>
              {!this.props.user.email && (
                <a href="localhost:8888/login">Login</a>
              )}
              {this.props.user.email && (
                <div
                  onClick={() => {
                    this.props.logout();
                    this.props.history.push("/");
                  }}
                >
                  Logout
                </div>
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
          </ul>
        </div>
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
