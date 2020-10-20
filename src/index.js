import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  title: `The Grand Budapest Hotel`,
  janre: `Drama`,
  releaseDate: new Date(),
};

ReactDOM.render(
    <App
      title = {Settings.title}
      janre = {Settings.janre}
      releaseYear={Settings.releaseDate.getFullYear()}
    />,
    document.querySelector(`#root`)
);
