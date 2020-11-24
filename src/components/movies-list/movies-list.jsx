import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card";
import {connect} from "react-redux";

const PLAYING_DELAY = 1000;

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      activeIndex: 0,
      activeMovieId: -1,
    };

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
    this._delayTimer = null;

    this.films = props.films;
    this.filmsByGenre = props.filmsByGenre;
    // this.massNoActive = [...this.films.slice(0, this.state.activeIndex), ...this.films.slice((this.state.activeIndex + 1), this.films.length)];
  }

  render() {
    return (
      <React.Fragment>
        <div className="catalog__movies-list">
          {this.filmsByGenre.map((element) =>
          // {this.massNoActive.map((element) =>
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
      </React.Fragment>
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
  filmsByGenre: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    activeGenre: state.activeGenre,
    filmsByGenre: state.filmsByGenre,
  };
};

export {MovieList};
export default connect(mapStateToProps)(MovieList);


