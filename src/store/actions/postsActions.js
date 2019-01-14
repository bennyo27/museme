import axios from "axios";

export const POSTS_FETCH_START = "POSTS_FETCH_START";
export const POSTS_FETCH_COMPLETE = "POSTS_FETCH_COMPLETE";
export const POSTS_FETCH_ERROR = "POSTS_FETCH_ERROR";

export const getPosts = () => {
  return dispatch => {
    dispatch({ type: POSTS_FETCH_START });
    axios
      .get("http://localhost:8888/posts")
      .then(res => {
        console.log(res.data);
        dispatch({ type: POSTS_FETCH_COMPLETE, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: POSTS_FETCH_ERROR });
      });
  };
};
