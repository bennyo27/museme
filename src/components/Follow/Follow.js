import React, { Component } from "react";
import { connect } from "react-redux";
import { searchUsers } from "../../store/actions/usersActions";
import { Link } from "react-router-dom";
import axios from "axios";

class Follow extends Component {
  state = {
    search: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      search: ""
    });
    this.props.searchUsers(this.state.search);
  };

  componentDidMount() {}

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Follow</h1>
          <h3>Search for people to follow here.</h3>
          <input
            type="search"
            placeholder="Search"
            value={this.state.search}
            name="search"
            onChange={this.handleChange}
          />
        </form>
        <div className="resultDisplay">
          {this.props.users.map(user => {
            return (
              <Link to={`/users/${user.display_name}`}>
                <div className="resultsDisplay">
                  <div className="profile-picture">
                    <img />
                    <h3>{user.display_name}</h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

// mapStateToProps
const mapStateToProps = state => {
  return {
    users: state.usersReducer.users
  };
};

export default connect(
  mapStateToProps,
  {
    searchUsers
  }
)(Follow);
