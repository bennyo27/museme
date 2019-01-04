import React, { Component } from "react";
import { getSpotifyUser } from "../../store/actions/spotifyActions";
import axios from "axios";
import { connect } from "react-redux";
import queryString from "query-string";

class Home extends Component {
  componentDidMount() {
    let values = queryString.parse(this.props.location.search);
    localStorage.setItem("access_token", values.access_token);
    this.props.getSpotifyUser();
  }
  render() {
    return <div>{console.log(this.props.user)}</div>;
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
    getSpotifyUser
  }
)(Home);
