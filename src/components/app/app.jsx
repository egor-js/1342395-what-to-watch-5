import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main";
import AuthScreen from "../auth-screen/auth-screen";
import MyList from "../my-list/my-list";
// import MoviePage from "../movie-page/movie-page";
// import AddReview from "../add-review/add-review";
// import Player from "../player/player";
import {propsApp} from "../../props";

const App = (props) => {
  console.log(props);
  const {users, reviews} = props;

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
        {/* <Route
          path="/films/:id"
          exact
          render={({match}) => {
            const id = match.params.id;

            const currentFilm = films.find((film) => film.id === id);
            const filmReviews = reviews.filter((item) => {
              return item.filmId === id;
            });
            const usersReviewers = filmReviews.map((review) => {
              return users.find((user) => {
                return user.id === review.userId;
              });
            });
            const rating = filmReviews.reduce((sum, item) => sum + Number(item.stars), 0) / (filmReviews.length);
            return (
              <MoviePage
                film={currentFilm}
                users={usersReviewers}
                reviews={filmReviews}
                rating={rating}
              />);
          }}
        />
        <Route
          path="/films/:id/review"
          exact
          render={({match}) => {
            const id = match.params.id;
            const currentFilm = films.find((film) => film.id === id);

            return (
              <AddReview
                film={currentFilm}
              />);
          }}
        />
        <Route
          path="/player/:id"
          exact
          render={({match}) => {
            const id = match.params.id;
            const currentFilm = films.find((film) => film.id === id);

            return (
              <Player
                film={currentFilm}
              />);
          }}
        /> */}


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
