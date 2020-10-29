import React, {PureComponent} from "react";
import { Link } from 'react-router-dom';

class AddReview extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rating: 1,
      reviewText: ``,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReviewTextChange = this.handleReviewTextChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log(this.state);
  }

  handleRatingChange(evt) {
    const value = parseInt(evt.target.value, 10);
    this.setState({ rating: value });
  }

  handleReviewTextChange(evt) {
    const value = evt.target.value;
    this.setState({ reviewText: value });
  }

  
  render() {
    const {id, poster, cover, title} = this.props.film;

    const starsCount = 5;
    const ratingStarsMarkup = [];

    for (let i = 1; i <= starsCount; i++) {
      const elementId = `star-${i}`;
      const checked = i === this.state.rating;

      ratingStarsMarkup.push(
        <React.Fragment key={elementId}>
          <input className="rating__input" id={elementId} type="radio" name="rating" value={i} defaultChecked={checked} onChange={this.handleRatingChange} />
          <label className="rating__label" htmlFor={elementId}>{`Rating ${i}`}</label>
        </React.Fragment>
      );
    }


  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={cover} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={`/films/${id}`}>{title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={poster} alt={`${title} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form" onSubmit={this.handleSubmit}>
          <div className="rating">
            <div className="rating__stars">
              {ratingStarsMarkup}
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={this.handleReviewTextChange} value={this.state.reviewText}></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
  }
}

export default AddReview;
