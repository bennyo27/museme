import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../../store/actions/spotifyActions";

class NewsFeedForm extends Component {
  state = {};

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <h1>Post</h1>
          <input
            type="comment"
            value={this.props.comment}
            name="comment"
            onChange={this.props.handleChange}
          />
        </form>
      </div>
    );
  }
}

// mapStateToProps
const mapStateToProps = state => {
  return {
    posts: state.spotifyReducer.posts
  };
};

export default connect(
  mapStateToProps,
  { getPosts }
)(NewsFeedForm);
