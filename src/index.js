import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {films} from "./mocks/films";
import {users} from "./mocks/users";
import {reviews} from "./mocks/reviews";

const Settings = films[8];

// films.forEach((val) => {
//   const date = new Date(val.releaseDate);
//   console.log(date.getFullYear());
// });

ReactDOM.render(
    <App
      films = {films}
      users = {users}
      reviews = {reviews}
    />,
    document.querySelector(`#root`)
);
