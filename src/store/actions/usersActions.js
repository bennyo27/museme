import axios from "axios";

export const DBUSER_FETCH_START = "DBUSER_FETCH_START";
export const DBUSER_FETCH_COMPLETE = "DBUSER_FETCH_COMPLETE";
export const DBUSER_FETCH_ERROR = "DBUSER_FETCH_ERROR";

export const USERS_SEARCH_START = "USERS_SEARCH_START";
export const USERS_SEARCH_COMPLETE = "USERS_SEARCH_COMPLETE";
export const USERS_SEARCH_ERROR = "USERS_SEARCH_ERROR";

export const USER_LOGOUT_START = "USER_LOGOUT_START";
export const USER_LOGOUT_COMPLETE = "USER_LOGOUT_COMPLETE";

export const fetchDbUser = display_name => {
  return dispatch => {
    dispatch({ type: DBUSER_FETCH_START });
    axios
      .get(`http://localhost:8888/users/${display_name}`)
      .then(res => {
        dispatch({ type: DBUSER_FETCH_COMPLETE, payload: res.data[0] });
      })
      .catch(err => {
        dispatch({ type: DBUSER_FETCH_ERROR });
      });
  };
};

export const searchUsers = search => {
  return dispatch => {
    dispatch({ type: USERS_SEARCH_START });
    axios
      .get(`http://localhost:8888/users/${search}`)
      .then(res => {
        dispatch({ type: USERS_SEARCH_COMPLETE, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: USERS_SEARCH_ERROR });
      });
  };
};

export const logout = () => {
  return dispatch => {
    dispatch({ type: USER_LOGOUT_START });
    const logout = {};
    dispatch({ type: USER_LOGOUT_COMPLETE, payload: logout });
  };
};
