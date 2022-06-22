import { useEffect } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";

import NewTweet from "./NewTweet";
import Dashboard from "./Dashboard";
import { handleInitialData } from "../actions/shared";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <div>
      <LoadingBar />
      {props.loading === true
        ? null
        : <>
            <NewTweet />
            <Dashboard />
          </>
      }
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null
});

export default connect(mapStateToProps)(App);
