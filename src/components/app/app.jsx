import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main";
import AuthScreen from "../auth-screen/auth-screen";
import MyList from "../my-list/my-list";
import MoviePage from "../movie-page/movie-page";
import AddReview from "../add-review/add-review";
// import PlayerPage from "../player-page/player-page";
import {Props} from "../../props";
import VideoPlayer from "../video-player/video-player";
// import {withVideoPlayer} from "../../hocs/with-video-player";
import PageNotFound from "../page-not-found/page-not-found";


// const VideoPlayer = withVideoPlayer(PlayerPage);


const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/login">
          <AuthScreen />
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
        <Route
          path="/films/:id"
          exact
          render={({match}) => {
            const id = match.params.id;
            return (
              <MoviePage
                id={id}
              />);
          }}
        />
        <Route
          path="/films/:id/review"
          exact
          render={({match}) => {
            const id = match.params.id;
            return (
              <AddReview
                id ={id}
              />);
          }}
        />
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(Props.film).isRequired,
  reviews: PropTypes.arrayOf(Props.review).isRequired,
  users: PropTypes.arrayOf(Props.user).isRequired,
};

export default App;
