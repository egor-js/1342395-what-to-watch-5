import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card";

const PLAYING_DELAY = 1000;

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
      
    this.state = {
      activeIndex: 0,
      activeMovieId: -1,
    };

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
    this._delayTimer = null;

    this.films = props.films;
    this.massNoActive = [...this.films.slice(0, this.state.activeIndex), ...this.films.slice((this.state.activeIndex + 1), this.films.length)];
  }

  render() {
    return (
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <ul className="catalog__genres-list">
          <li className="catalog__genres-item catalog__genres-item--active">
            <a href="#" className="catalog__genres-link">All genres</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Comedies</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Crime</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Documentary</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Dramas</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Horror</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Kids & Family</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Romance</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Sci-Fi</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Thrillers</a>
          </li>
        </ul>

        <div className="catalog__movies-list">
          {this.massNoActive.map((element) =>
            <MovieCard
              key={element.title}
              id={element.id}
              title={element.title}
              cover={element.cover}
              src={element.src}
              onMouseEnter={this._onMouseEnter}
              onMouseLeave={this._onMouseLeave}
              isPlaying={this.state.activeMovieId === element.id}
            />
          )}
        </div>

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>
    );

  }

  _onMouseEnter(id) {
    this._delayTimer = setTimeout(() => this.setState({activeMovieId: id}), PLAYING_DELAY);
  }

  _onMouseLeave() {
    clearTimeout(this._delayTimer);
    this._delayTimer = null;
    this.setState({activeMovieId: -1});
  }
}

MovieList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default MovieList;
