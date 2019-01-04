import axios from "axios";

export const USER_FETCH_START = "USER_FETCH_START";
export const USER_FETCH_COMPLETE = "USER_FETCH_COMPLETE";
export const USER_FETCH_ERROR = "USER_FETCH_ERROR";

export const getSpotifyUser = () => {
  return dispatch => {
    dispatch({ type: USER_FETCH_START });
    axios
      .get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`
        }
      })
      .then(response => {
        console.log(response);
        dispatch({ type: USER_FETCH_COMPLETE, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: USER_FETCH_ERROR });
      });
  };
};
