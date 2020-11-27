import React from 'react';
import {Props} from "../../props";

const reviewsList = (review, users) => {
  const user = users.find((item) => review.userId === item.id);
  return (
    <React.Fragment>
      <blockquote className="review__quote">
        <p className="review__text">{review.text}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={review.date}>{review.date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.stars}</div>
    </React.Fragment>
  );
};

const TabsReviews = (props) => {
  const {filmReviews, users} = props;
  const tmp = filmReviews.map((review) => {
    return (
      <div key={review.id} className="review">
        {reviewsList(review, users)}
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
  review: Props.review,
  users: Props.users,
};

export default TabsReviews;
