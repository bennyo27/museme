import React, { Component } from "react";
import axios from "axios";
import "./Explore.css";

class Explore extends Component {
  state = {
    latest_releases: [],
    recommended: []
  };

  getLatestReleases() {
    axios
      .get(
        "https://api.spotify.com/v1/browse/new-releases?country=US&limit=6&offset=5",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`
          }
        }
      )
      .then(res => {
        console.log(res.data.albums.items);
        this.setState({
          latest_releases: res.data.albums.items
        });
      });
  }

  getRecommended() {
    axios
      .get(
        "https://api.spotify.com/v1/me/player/recently-played?type=track&limit=10&after=1484811043508",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`
          }
        }
      )
      .then(res => {
        console.log("res", res);
      })
      .catch(err => {
        console.log(err.response);
      });
  }

  componentDidMount() {
    this.getLatestReleases();
    this.getRecommended();
  }

  render() {
    return (
      <div className="explore-container">
        <div className="explore-title">
          <h1>Explore</h1>
        </div>
        <div className="explore-latest-container">
          <div className="explore-subtitle">
            <h2>Latest Releases</h2>
          </div>
          <div className="explore-latest-releases">
            {this.state.latest_releases.map(album => {
              return (
                <div className="album">
                  <div className="album-image">
                    <a href={`${album.artists[0].external_urls.spotify}`}>
                      <img src={album.images[1].url} />
                    </a>
                    <div className="album-info">
                      <h2>{album.name}</h2>
                      <h3>{album.artists[0].name}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="explore-recommended-container">
          <div className="explore-subtitle">
            <h2>Recommended</h2>
          </div>
          <div className="explore-recommended">s</div>
        </div>
      </div>
    );
  }
}

export default Explore;
