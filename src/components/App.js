import { useEffect } from "react";
import { connect } from "react-redux";

import Dashboard from "./Dashboard";
import { handleInitialData } from "../actions/shared";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <div>
      {props.loading === true ? null : <Dashboard />}
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null
});

export default connect()(App);
