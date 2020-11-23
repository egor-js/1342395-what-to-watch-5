export const ActionType = {
  CHANGE_FILMS_GENRE: `CHANGE_FILMS_GENRE`,
};

export const ActionCreator = {
  changeFilmsGenre: (activeGenre) => ({
    type: ActionType.CHANGE_FILMS_GENRE,
    payload: activeGenre,
  })
};
