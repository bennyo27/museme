import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Home from "../Home/Home";
import Explore from "../Explore/Explore";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className ="App-body">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/explore" component={Explore} />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
