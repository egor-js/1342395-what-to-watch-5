import React from "react";
import PropTypes from "prop-types";
import {getGenres} from "../../filters";
import {films as allFilms} from "../../mocks/films";

const GenresList = (props) => {
  console.log(props);
  const {activeGenre, onGenreChange} = props;
  const genres = [`All genres`, ...getGenres(allFilms)];

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li key={genre}
          className={`catalog__genres-item ${activeGenre === genre ? `catalog__genres-item--active` : ``}`}
          data-genre={genre}
          onClick={(evt) => {
            evt.preventDefault();
            evt.stopPropagation();
            onGenreChange(genre);
          }}
        >
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>
  );
};

GenresList.propTypes = {
  activeGenre: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired,
};

export default GenresList;
