import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import WelcomeScreen from "../main/main";
import AuthScreen from "../auth-screen/auth-screen";
import MyList from "../my-list/my-list";
import MoviePage from "../movie-page/movie-page";
import AddReview from "../add-review/add-review";
import Player from "../player/player";

const App = (props) => {
  const { title, janre, releaseYear } = props;

  return (
        <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen
            title={title}
            janre={janre}
            releaseYear={releaseYear}
          />
        </Route>
        <Route exact path="/login">
          <AuthScreen />
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
        <Route exact path="/films/:id">
          <MoviePage />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReview />
        </Route>
        <Route exact path="/player/:id">
          <Player />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  janre: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired,
};

export default App;
