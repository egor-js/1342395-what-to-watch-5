import React, {PureComponent} from "react";
import {Link} from 'react-router-dom';
import {Props} from "../../props";
import Logo from "../logo/logo";

class AddReview extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rating: 1,
      reviewText: ``,
    };

    this._onSubmit = this._onSubmit.bind(this);
    this._onRatingChange = this._onRatingChange.bind(this);
    this._onReviewTextChange = this._onReviewTextChange.bind(this);
  }

  _onSubmit(evt) {
    evt.preventDefault();
  }

  _onRatingChange(evt) {
    const value = parseInt(evt.target.value, 10);
    this.setState({rating: value});
  }

  _onReviewTextChange(evt) {
    const value = evt.target.value;
    this.setState({reviewText: value});
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
            <input className="rating__input" id={elementId} type="radio" name="rating" value={i} defaultChecked={checked} onChange={this._onRatingChange} />
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
            <Logo />

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
          <form action="#" className="add-review__form" onSubmit={this._onSubmit}>
            <div className="rating">
              <div className="rating__stars">
                {ratingStarsMarkup}
              </div>
            </div>

            <div className="add-review__text">
              <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={this._onReviewTextChange} value={this.state.reviewText}></textarea>
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

AddReview.propTypes = {
  film: Props.film,
};

export default AddReview;
