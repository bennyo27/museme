import axios from "axios";

export const USER_FETCH_START = "USER_FETCH_START";
export const USER_FETCH_COMPLETE = "USER_FETCH_COMPLETE";
export const USER_FETCH_ERROR = "USER_FETCH_ERROR";

// user is fetched from spotify, then if user exists new user is posted otherwise return user profile from db
export const manageSpotifyUser = () => {
  var user_info = {};
  return dispatch => {
    dispatch({ type: USER_FETCH_START });
    axios
      .get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`
        }
      })
      .then(res => {
        let email = res.data.email;
        let display_name = res.data.display_name;
        let spotify_id = res.data.id;
        user_info = { email, display_name, spotify_id };
      })
      .then(() => {
        axios.post("http://localhost:8888/users", user_info).then(() => {
          axios
            .get(`http://localhost:8888/users/${user_info.display_name}`)
            .then(res => {
              console.log(res.data);
              let db_info = res.data[0];
              dispatch({ type: USER_FETCH_COMPLETE, payload: db_info });
            });
        });
      })
      .catch(err => {
        dispatch({ type: USER_FETCH_ERROR });
      });
  };
};
