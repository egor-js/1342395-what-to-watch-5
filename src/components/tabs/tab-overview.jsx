import React from 'react';
import PropTypes from 'prop-types';

const ratingWord = (val) => {
  if (val >= 0 && val < 3) {
    return `Bad`;
  } else if (val >= 3 && val < 5) {
    return `Normal`;
  } else if (val >= 5 && val < 8) {
    return `Good`;
  } else if (val >= 8 && val < 10) {
    return `Very good`;
  } else {
    return `Awesome`;
  }
};

const TabsOverview = (props) => {
  const {film, rating, ratings} = props;
  const {description1, description2, director, starring} = film;
  console.log(ratings);
  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingWord(rating)}</span>
          <span className="movie-rating__count">{ratings} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description1}</p>
        <p>{description2}</p>
        <p className="movie-card__director"><strong>Director: {director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)} and other</strong></p>
      </div>
    </React.Fragment>
  );
};

TabsOverview.propTypes = {
  film: PropTypes.shape.isRequired,
  rating: PropTypes.number.isRequired,
  ratings: PropTypes.number.isRequired,
};

export default TabsOverview;
