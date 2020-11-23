export const getGenres = (films) => {
  return Array.from(new Set(films.map((item) => item.genre)));
};

export const getFilmsByGenre = (films, genre) => {
  return films.filter((item) => item.genre === genre);
};
