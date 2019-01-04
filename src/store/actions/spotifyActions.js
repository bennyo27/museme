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
        let email = response.data.email;
        let display_name = response.data.display_name;
        let spotify_id = response.data.id;
        let user_info = { email, display_name, spotify_id };
        dispatch({ type: USER_FETCH_COMPLETE, payload: user_info });
      })
      .catch(err => {
        dispatch({ type: USER_FETCH_ERROR });
      });
  };
};
