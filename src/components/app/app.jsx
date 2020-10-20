import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../main/main";
import AuthScreen from "../auth-screen/auth-screen";
import MyList from "../my-list/my-list";
import MoviePage from "../movie-page/movie-page";
import AddReview from "../add-review/add-review";
import Player from "../player/player";

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
