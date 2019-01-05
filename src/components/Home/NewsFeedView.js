import React, { Component } from 'react';

class NewsFeedView extends Component {
  state = {
   
  };



  render() {
    return (
      <div>
        <div className="NewsFeedView">
          <div className="Profile-pic">
            <img src={this.props.item.img} />
          </div>
          <div className="Post">{this.props.item.comment}</div>
        </div>
       
      </div>
    );
  }
}

export default NewsFeedView;
