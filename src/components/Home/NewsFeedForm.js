import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../../store/actions/postsActions";

class NewsFeedForm extends Component {
  state = {};

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.props.handleSubmit}>
          <input
            type="comment"
            value={this.props.comment}
            name="comment"
            onChange={this.props.handleChange}
            placeholder="Message here.."
          />
        </form>
      </div>
    );
  }
}

// mapStateToProps
const mapStateToProps = state => {
  return {
    posts: state.postsReducer.posts
  };
};

export default connect(
  mapStateToProps,
  { getPosts }
)(NewsFeedForm);
