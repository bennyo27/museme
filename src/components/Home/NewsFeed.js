import React, { Component } from 'react';
import NewsFeedView from './NewsFeedView';
import NewsFeedForm from './NewsFeedForm';

class NewsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NewsFeed: {
        News: [
          {
            img:
              ' https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg',
            comment:
              'Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test sTest Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test'
          },
          {
            img:
              'http://profiletalent.com.au/wp-content/uploads/2017/05/profile-talent-ant-simpson-feature.jpg',
            comment: '12'
          },
          {
            comment: '34'
          }
        ]
      },
    };
  }

  newComment = comment => {
    let News = [...this.state.NewsFeed.News, comment];
    this.setState({
      News
    });
    console.log(News);
  };

  render() {
    return (
      <div className="NewsFeed">
        {this.state.NewsFeed.News.map(item => (
          <NewsFeedView item={item} />
        ))}
        <div>
          <NewsFeedForm newComment={this.newComment} />
        </div>
      </div>
    );
  }
}

export default NewsFeed;
