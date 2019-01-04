import React, { Component } from "react";
import NewsFeedView from "./NewsFeedView"

class NewsFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NewsFeed : {
                "News":[
                 {
                   "name": 'Test',
                   "value": '1',
                 },
                 {
                   "name": 'Test2',
                   "value": '12',
                 },
                ]
            }
    }
}

  render() {
    return (
        <div className="NewsFeed">
        {this.state.NewsFeed.News.map((item)=>(<NewsFeedView item={item}/>))}
      </div>
    );
  }
}

export default NewsFeed;
