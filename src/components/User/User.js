import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDbUser } from "../../store/actions/usersActions";
import "./User.css";
import axios from "axios";

class User extends Component {
  componentDidMount() {
    this.props.fetchDbUser(this.props.match.params.display_name);
  }
  render() {
    return (
      <div className="user-container">
        <div className="user-header">
          <div className="user-picture">
            <img />
          </div>
          <div className="user-name">
            <h1>{this.props.dbUser.display_name}</h1>
          </div>
          <div
            className="btn-follow"
            onClick={() => {
              axios.post(
                `http://localhost:8888/users/${
                  this.props.user.display_name
                }/follows/${this.props.dbUser.display_name}`
              );
            }}
          >
            Follow
          </div>
        </div>
      </div>
    );
  }
}

// mapStateToProps
const mapStateToProps = state => {
  return {
    user: state.spotifyReducer.user,
    dbUser: state.usersReducer.dbUser
  };
};

export default connect(
  mapStateToProps,
  {
    fetchDbUser
  }
)(User);
