import {
  POSTS_FETCH_START,
  POSTS_FETCH_COMPLETE,
  POSTS_FETCH_ERROR
} from "../actions/postsActions";

const initialState = {
  posts: []
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
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

export default postsReducer;
