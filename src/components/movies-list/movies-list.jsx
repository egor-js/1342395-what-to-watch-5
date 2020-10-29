import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card"

class MovieList extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
        activeIndex: 0,
    }
    this._onHover = this._onHover.bind(this);
    this.films = props.films;
    this.massNoActive = [...this.films.slice(0, this.state.activeIndex), ...this.films.slice((this.state.activeIndex + 1), this.films.length)];
    this.cards = this.massNoActive.map((element) => {
      return (
        <MovieCard
          key={element.title}
          id={element.id}
          title={element.title}
          cover={element.cover}
          onHover={this._onHover}
        />
      );
    });
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
          {this.cards}
        </div>

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>
    );
  }
  
  _onHover(id) {
    this.setState({activeIndex: id});
  }

};

MovieList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default MovieList;