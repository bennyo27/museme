import { combineReducers } from "redux";
import spotifyReducer from "./spotifyReducer";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({ spotifyReducer, postsReducer, usersReducer });
