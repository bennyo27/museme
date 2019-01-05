import React, { Component } from 'react';

class NewsFeedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.newComment(this.state);
    this.setState({
      comment: ''
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <h1>
           Post 
        </h1>
          <input
            type="comment"
            value={this.state.comment}
            name="comment"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default NewsFeedForm;
