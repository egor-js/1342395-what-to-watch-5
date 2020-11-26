import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card";
import {connect} from "react-redux";
import ShowMoreButton from "../show-more-button/show-more-button";

const PLAYING_DELAY = 1000;

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      page: 1,
      activeMovieId: null,
    };

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
    this._onMoreClick = this._onMoreClick.bind(this);
    this._delayTimer = null;
  }

  _onMouseEnter(id) {
    this._delayTimer = setTimeout(() => this.setState(({activeMovieId}) => {
      if (activeMovieId !== id) {
        return {activeMovieId: id};
      }

      return null;
    }), PLAYING_DELAY);
  }

  _onMouseLeave() {
    clearTimeout(this._delayTimer);
    this._delayTimer = null;
    this.setState({activeMovieId: null});
  }

  _onMoreClick() {
    this.setState(({page}) => ({page: 1 + page}));
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const {filmsByGenre = [], flagMoreLike} = this.props;
    const {activeMovieId, page} = this.state;

    const slicedFilms = flagMoreLike ? filmsByGenre.slice(0, 4) : filmsByGenre.slice(0, 8 * page);

    const showMoreButton = (
      <div className="catalog__more">
        <button
          className="catalog__button"
          type="button"
          onClick={this._onMoreClick}
        >
          Show more
        </button>
      </div>
    );

    return (
      <React.Fragment>
        <div className="catalog__movies-list">
          {slicedFilms.map((film) =>
            <MovieCard
              key={film.title}
              id={film.id}
              title={film.title}
              cover={film.cover}
              src={film.src}
              onMouseEnter={this._onMouseEnter}
              onMouseLeave={this._onMouseLeave}
              isPlaying={activeMovieId === film.id}
            />
          )}
        </div>

        {filmsByGenre.length > slicedFilms.length && !flagMoreLike ? <ShowMoreButton onMoreClick={this._onMoreClick}/> : null}
      </React.Fragment>
    );

  }
}

const mapStateToProps = ({filmsByGenre}) => ({filmsByGenre});

export {MovieList};
export default connect(mapStateToProps)(MovieList);


