import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "../main/main";
import AuthScreen from "../auth-screen/auth-screen";
import MyList from "../my-list/my-list";
import MoviePage from "../movie-page/movie-page";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
import {propsApp} from "../../props"

const App = (props) => {
  const {films, users, reviews} = props;

  return (
        <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            films = {films}
          />
        </Route>
        <Route exact path="/login">
          <AuthScreen />
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
        <Route path="/Mains/:id">
          <MoviePage />
        </Route>
        <Route path="/Mains/:id/review">
          <AddReview />
        </Route>
        <Route exact path="/player/:id">
          <Player />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = propsApp;

// App.propTypes = {
//   Mains: PropTypes.array.isRequired,
//   users: PropTypes.array.isRequired,
//   reviews: PropTypes.array.isRequired,
// };

export default App;
