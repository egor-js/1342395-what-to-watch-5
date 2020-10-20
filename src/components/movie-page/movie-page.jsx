import React from "react";


const MoviePage = () => {

  return (
    <React.Fragment>
    <section classNameName="movie-card movie-card--full">
      <div classNameName="movie-card__hero">
        <div classNameName="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 classNameName="visually-hidden">WTW</h1>

        <header classNameName="page-header movie-card__head">
          <div classNameName="logo">
            <a href="main.html" classNameName="logo__link">
              <span classNameName="logo__letter logo__letter--1">W</span>
              <span classNameName="logo__letter logo__letter--2">T</span>
              <span classNameName="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div classNameName="user-block">
            <div classNameName="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div classNameName="movie-card__wrap">
          <div classNameName="movie-card__desc">
            <h2 classNameName="movie-card__title">The Grand Budapest Hotel</h2>
            <p classNameName="movie-card__meta">
              <span classNameName="movie-card__genre">Drama</span>
              <span classNameName="movie-card__year">2014</span>
            </p>

            <div classNameName="movie-card__buttons">
              <button classNameName="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
              <span>Play</span>
              </button>
            <button classNameName="btn btn--list movie-card__button" type="button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
                </svg>
            <span>My list</span>
              </button>
          <a href="add-review.html" classNameName="btn movie-card__button">Add review</a>
        </div>
      </div>
        </div>
      </div >

  <div classNameName="movie-card__wrap movie-card__translate-top">
    <div classNameName="movie-card__info">
      <div classNameName="movie-card__poster movie-card__poster--big">
        <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
      </div>

      <div classNameName="movie-card__desc">
        <nav classNameName="movie-nav movie-card__nav">
          <ul classNameName="movie-nav__list">
            <li classNameName="movie-nav__item movie-nav__item--active">
              <a href="#" classNameName="movie-nav__link">Overview</a>
            </li>
            <li classNameName="movie-nav__item">
              <a href="#" classNameName="movie-nav__link">Details</a>
            </li>
            <li classNameName="movie-nav__item">
              <a href="#" classNameName="movie-nav__link">Reviews</a>
            </li>
          </ul>
        </nav>

        <div classNameName="movie-rating">
          <div classNameName="movie-rating__score">8,9</div>
          <p classNameName="movie-rating__meta">
            <span classNameName="movie-rating__level">Very good</span>
            <span classNameName="movie-rating__count">240 ratings</span>
          </p>
        </div>

        <div classNameName="movie-card__text">
          <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>

          <p>Gustave prides himself on providing first-classNameName service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>

          <p classNameName="movie-card__director"><strong>Director: Wes Andreson</strong></p>

          <p classNameName="movie-card__starring"><strong>Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other</strong></p>
        </div>
      </div>
    </div>
  </div>
    </section >

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__movies-list">
            <article className="small-movie-card catalog__movies-card">
              <div className="small-movie-card__image">
                <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
              </div>
              <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="movie-page.html">Fantastic Beasts: The Crimes of Grindelwald</a>
              </h3>
            </article>

            <article className="small-movie-card catalog__movies-card">
              <div className="small-movie-card__image">
                <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width="280" height="175" />
              </div>
              <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="movie-page.html">Bohemian Rhapsody</a>
              </h3>
            </article>

            <article className="small-movie-card catalog__movies-card">
              <div className="small-movie-card__image">
                <img src="img/macbeth.jpg" alt="Macbeth" width="280" height="175" />
              </div>
              <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="movie-page.html">Macbeth</a>
              </h3>
            </article>

            <article className="small-movie-card catalog__movies-card">
              <div className="small-movie-card__image">
                <img src="img/aviator.jpg" alt="Aviator" width="280" height="175" />
              </div>
              <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="movie-page.html">Aviator</a>
              </h3>
            </article>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
      </React.Fragment>
  );

};

export default MoviePage;
