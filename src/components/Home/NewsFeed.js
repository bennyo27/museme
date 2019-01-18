import React, { Component } from "react";
import NewsFeedView from "./NewsFeedView";
import NewsFeedForm from "./NewsFeedForm";
import { connect } from "react-redux";
import { getPosts } from "../../store/actions/postsActions";
import axios from "axios";

class NewsFeed extends Component {
  state = {
    newsFeed: {
      news: []
    },
    text: "",
    comment: ""
  };

  // for NewsFeedForm
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.newComment(this.state.comment);
    this.setState({
      comment: ""
    });
    let user_spotify_id = this.props.user.spotify_id;
    let user_display_name = this.props.user.display_name;
    let content = this.state.comment;
    let date = new Date();
    let created_at = date.getTime();
    let post = { user_spotify_id, user_display_name, content, created_at };
    axios
      .post(`http://localhost:8888/posts`, post)
      .then(() => this.newsFeedHandler());
    document.getElementById(
      "news-container"
    ).scrollTop = document.getElementById("news-container").scrollHeight;
  };

  newsFeedHandler = () => {
    this.props.getPosts(this.props.user.display_name);
    this.setState({ News: this.props.posts });
  };

  newComment = comment => {
    let News = [...this.state.newsFeed.news, comment];
    this.setState({
      News
    });
    console.log(News);
  };

  componentDidMount = () => {
    this.newsFeedHandler();
    document.getElementById(
      "news-container"
    ).scrollTop = document.getElementById("news-container").scrollHeight;
  };

  render() {
    return (
      <div className="newsFeed">
        <div id="news-container">
          {this.props.posts.map(post => (
            <NewsFeedView post={post} />
          ))}
        </div>
        <div>
          <NewsFeedForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            comment={this.state.comment}
          />
        </div>
      </div>
    );
  }
}

// mapStateToProps
const mapStateToProps = state => {
  return {
    user: state.spotifyReducer.user,
    posts: state.postsReducer.posts
  };
};

export default connect(
  mapStateToProps,
  {
    getPosts
  }
)(NewsFeed);
