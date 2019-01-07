import React, { Component } from "react";

class NewsFeedView extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="newsFeedView">
          <div className="profile-pic">
            <img />
          </div>
          <div className="post">{this.props.post.content}</div>
        </div>
      </div>
    );
  }
}

export default NewsFeedView;
