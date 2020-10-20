import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../main/main";

const App = (props) => {
  const { title, janre, releaseYear } = props;

  return (
    <WelcomeScreen 
      title = {title}
      janre = {janre}
      releaseYear = {releaseYear}
    />
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  janre: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired,
};

export default App;
