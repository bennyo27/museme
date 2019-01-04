import React, { Component } from 'react';


class NewsFeedView extends Component {

  render() {
    return (
      <div className="NewsFeedView">
        <div className ="Profile-pic">{this.props.item.name}</div>
        <div className="Post">{this.props.item.value}</div>
      </div>
    );
  }
}

export default NewsFeedView;
