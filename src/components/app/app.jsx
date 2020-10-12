import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screeen";


const App = (props) => {
// eslint-disable-next-line react/prop-types
  const {errorsCount} = props;

  return (
    <WelcomeScreen errorsCount={errorsCount} />
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;
