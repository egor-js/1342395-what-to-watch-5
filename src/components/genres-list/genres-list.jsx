import React from "react";
import PropTypes from "prop-types";
import {getGenres} from "../../filters";
import {films as allFilms} from "../../mocks/films";
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';


const GenresList = ({activeGenre, onGenreChange}) => {
  const genres = [`All genres`, ...getGenres(allFilms)];

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li key={genre}
          className={`catalog__genres-item ${activeGenre === genre ? `catalog__genres-item--active` : ``}`}
          data-genre={genre}
          onClick={(evt) => {
            evt.preventDefault();
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

const mapStateToProps = ({activeGenre}) => ({activeGenre});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange(activeGenre) {
    dispatch(ActionCreator.changeFilmsGenre(activeGenre));
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);

