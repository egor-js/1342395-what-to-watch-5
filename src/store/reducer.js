import {ActionType} from "./action";
import {getFilmsByGenre} from "../filters";
import {extend} from "../utils";
import {films} from "../mocks/films";

export const ALL_GENRES = `All genres`;

const initialState = {
  activeGenre: ALL_GENRES,
  filmsByGenre: films,
};

export const reducer = (state = initialState, action) => {
    console.log(`state is`);
    console.log(state);
    console.log(`action.type is`);
    console.log(action.type);
    console.log(`action.payload is`);
    console.log(action.payload);
  switch (action.type) {
    case ActionType.CHANGE_FILMS_GENRE:
      const isDeafaultGenre = (initialState.activeGenre === action.payload);
      const filteredFilms = isDeafaultGenre ? films : getFilmsByGenre(films, action.payload);
      return extend(state, {
        activeGenre: action.payload,
        filmsByGenre: filteredFilms,
      });
  }

  return state;
};
