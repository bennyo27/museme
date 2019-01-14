import React, { Component } from "react";

class NewsFeedView extends Component {
  state = {};

  render() {
    return (
      <div className="newsFeedView">
        <div className="post">
          <div className="profile-pic">
            <img />
          </div>
          <div className="post-info">
            <div className="post-display_name">
              <h3>{this.props.post.user_display_name}</h3>
            </div>
            <div className="post-content">
              <p>{this.props.post.content}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsFeedView;
