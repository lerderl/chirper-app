import { connect } from "react-redux";
import { useEffect, Fragment } from "react";
import LoadingBar from "react-redux-loading-bar";
import { Route, Routes } from "react-router-dom";

import Nav from "./Nav";
import NewTweet from "./NewTweet";
import Dashboard from "./Dashboard";
import TweetPage from "./TweetPage";
import { handleInitialData } from "../actions/shared";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <div>
      <Fragment>
        <LoadingBar />
        <div className="container">
          <Nav />
          {props.loading === true
            ? null
            : (
                <Routes>
                  <Route path="/new" element={<NewTweet />} />
                  <Route path="/" exact element={<Dashboard />} />
                  <Route path="/tweet/:id" element={<TweetPage />} />
                </Routes>
              )
          }
        </div>
      </Fragment>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null
});

export default connect(mapStateToProps)(App);
