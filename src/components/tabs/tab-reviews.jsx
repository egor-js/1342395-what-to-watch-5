import React from 'react';
import PropTypes from 'prop-types';

const reviewsList = (review) => {
  return (
  // eslint-disable-next-line react/jsx-key
    <React.Fragment>
      <blockquote className="review__quote">
        <p className="review__text">{review.text}</p>

        <footer className="review__details">
          <cite className="review__author">{review.author}</cite>
          <time className="review__date" dateTime={review.date}>{review.date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.stars}</div>
    </React.Fragment>
  );

};

const TabsReviews = (props) => {
  const {filmReviews} = props;
  const tmp = filmReviews.map((review) => {
    return (
      <div key={review.id} className="review">
        {reviewsList(review)}
      </div>
    );
  });
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {tmp}

      </div>
    </div>
  );
};

TabsReviews.propTypes = {
  filmReviews: PropTypes.array.isRequired,
};

export default TabsReviews;
