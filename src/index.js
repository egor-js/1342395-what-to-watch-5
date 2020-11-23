import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {films} from "./mocks/films";
import {users} from "./mocks/users";
import {reviews} from "./mocks/reviews";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./store/reducer";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        films = {films}
        users = {users}
        reviews = {reviews}
      />,
    </Provider>,
    document.querySelector(`#root`)
);
