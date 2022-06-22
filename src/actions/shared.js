import { showLoading, hideLoading } from "react-redux-loading-bar";

import { receiveUsers } from "./users";
import { receiveTweets } from "./tweets";
import { setAuthedUser } from "./authedUser";
import { getInitialData } from "../utils/api";

const AUTHED_ID = "dan_abramov";

export function handleInitialData () {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({users, tweets}) => {
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(tweets));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
};
