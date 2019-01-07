import {
  USER_FETCH_START,
  USER_FETCH_COMPLETE,
  USER_FETCH_ERROR,
  POSTS_FETCH_START,
  POSTS_FETCH_COMPLETE,
  POSTS_FETCH_ERROR
} from "../actions/spotifyActions";

const initialState = {
  user: {},
  posts: []
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

    case POSTS_FETCH_START:
      return {
        ...state,
        sendingUser: true
      };

    case POSTS_FETCH_COMPLETE:
      return {
        ...state,
        posts: action.payload,
        sendingUser: false,
        sentUser: true
      };

    case POSTS_FETCH_ERROR:
      return {
        ...state,
        error: "Error fetching movies"
      };

    default:
      return state;
  }
};

export default spotifyReducer;
