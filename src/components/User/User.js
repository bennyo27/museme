import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDbUser } from "../../store/actions/usersActions";
import "./User.css";

class User extends Component {
  componentDidMount() {
    this.props.fetchDbUser(this.props.match.params.display_name);
  }
  render() {
    return (
      <div className="user-container">
        <div className="user-header">
          <div className="user-picture">
            <img />
          </div>
          <div className="user-name">
            <h1>{this.props.dbUser.display_name}</h1>
          </div>
        </div>
      </div>
    );
  }
}

// mapStateToProps
const mapStateToProps = state => {
  return {
    dbUser: state.usersReducer.dbUser
  };
};

export default connect(
  mapStateToProps,
  {
    fetchDbUser
  }
)(User);
