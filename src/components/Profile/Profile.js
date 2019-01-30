import React, { Component } from "react";
import { connect } from "react-redux";
import "./Profile.css";

class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-picture">
            <img src={this.props.user.image} />
          </div>
          <div className="profile-name">
            <h1>{this.props.user.display_name}</h1>
          </div>
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

export default connect(mapStateToProps)(Profile);
