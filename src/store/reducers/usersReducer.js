import {
  DBUSER_FETCH_START,
  DBUSER_FETCH_COMPLETE,
  DBUSER_FETCH_ERROR,
  USERS_SEARCH_START,
  USERS_SEARCH_COMPLETE,
  USERS_SEARCH_ERROR
} from "../actions/usersActions";

const initialState = {
  dbUser: {},
  users: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case DBUSER_FETCH_START:
      return {
        ...state,
        fetchedingDbUser: true
      };

    case DBUSER_FETCH_COMPLETE:
      return {
        ...state,
        dbUser: action.payload,
        fetchedingDbUser: false,
        fetchedDbUser: true
      };

    case DBUSER_FETCH_ERROR:
      return {
        ...state,
        error: "Error fetching user"
      };
    case USERS_SEARCH_START:
      return {
        ...state,
        searchingUsers: true
      };

    case USERS_SEARCH_COMPLETE:
      return {
        ...state,
        users: action.payload,
        searchingUsers: false,
        searchedUsers: true
      };

    case USERS_SEARCH_ERROR:
      return {
        ...state,
        error: "Error searching users"
      };

    default:
      return state;
  }
};

export default usersReducer;
