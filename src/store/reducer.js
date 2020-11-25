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
  switch (action.type) {
    case ActionType.CHANGE_FILMS_GENRE:
      const activeGenre = action.payload;
      if (activeGenre === ALL_GENRES) {
        return extend(state, {
          activeGenre,
          filmsByGenre: films,
        });
      }

      return extend(state, {
        activeGenre,
        filmsByGenre: getFilmsByGenre(films, action.payload),
      });
  }

  return state;
};
