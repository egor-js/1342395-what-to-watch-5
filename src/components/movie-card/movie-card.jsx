import React from "react";
import PropTypes from "prop-types";

const MovieCard = (props) => { 
  const {title, cover, onHover, id} = props;
  return (
    <article id={id} className="small-movie-card catalog__movies-card">
      <div onMouseOver={onHover} className="small-movie-card__image">
        <img src={cover} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );

};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default MovieCard;
