import React from "react";
import {getYear} from "../../utils";
import {Link} from 'react-router-dom';
import Logo from "../logo/logo";
import TabsSelect from "../tabs/tabs-select";
import PropTypes from 'prop-types';
import {Props} from "../../props";
import MoviesList from "../movies-list/movies-list";

const MoviePage = (props) => {
  const {id, title, genre, releaseDate} = props.film;
  const reviews = props.reviews;
  const users = props.users;
  const rating = props.rating;
  const releaseYear = getYear(releaseDate);

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <Logo />

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{releaseYear}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <Link to={`/films/${id}/review`}>
                      {title}
                    </Link>
                  </svg>
                  <span>My list</span>
                </button>
                <Link to={`/films/${id}/review`} className="btn movie-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div >

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <TabsSelect rating={rating} filmReviews={reviews} film={props.film} users={users}/>
          </div>
        </div>
      </section >

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MoviesList flagMoreLike={true}/>
        </section>

        <footer className="page-footer">
          <Logo isFooter={true}/>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );

};

MoviePage.propTypes = {
  film: Props.film,
  reviews: PropTypes.arrayOf(Props.review).isRequired,
  users: PropTypes.arrayOf(Props.user).isRequired,
  rating: PropTypes.number.isRequired,
};

export default MoviePage;
