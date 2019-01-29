import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import Explore from "../Explore/Explore";
import Follow from "../Follow/Follow";
import User from "../User/User";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App-body">
        <Sidebar />
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/explore" component={Explore} />
          <Route path="/follow" component={Follow} />
          <Route path="/users/:display_name" component={User} />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
