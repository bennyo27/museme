import {
  USER_FETCH_START,
  USER_FETCH_COMPLETE,
  USER_FETCH_ERROR
} from "../actions/spotifyActions";

const initialState = {
  user: {}
};

const spotifyReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_FETCH_START:
      return {
        ...state,
        fetchingUser: true
      };

    case USER_FETCH_COMPLETE:
      return {
        ...state,
        user: action.payload,
        fetchingUser: false,
        fetchedUser: true
      };

    case USER_FETCH_ERROR:
      return {
        ...state,
        error: "Error fetching movies"
      };

    default:
      return state;
  }
};

export default spotifyReducer;
