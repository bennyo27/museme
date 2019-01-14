import React, { Component } from "react";
import { manageSpotifyUser } from "../../store/actions/spotifyActions";
import "./Home.css";

import axios from "axios";
import { connect } from "react-redux";
import queryString from "query-string";
import NewsFeed from "./NewsFeed";

class Home extends Component {
  componentDidMount() {
    let values = queryString.parse(this.props.location.search);
    localStorage.setItem("access_token", values.access_token);
    this.props.manageSpotifyUser();
  }
  render() {
    return (
      <div className="home-container">
        <NewsFeed />
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
    manageSpotifyUser
  }
)(Home);
