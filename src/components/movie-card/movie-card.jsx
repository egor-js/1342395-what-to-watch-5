import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player";
import {Link} from 'react-router-dom';

const MovieCard = (props) => {
  const {
    title,
    cover,
    onMouseEnter,
    onMouseLeave,
    id,
    src,
    isPlaying,
  } = props;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        onMouseEnter(id);
      }}
      onMouseLeave={() => {
        onMouseLeave();
      }}
    >
      <div id={id}
        className="small-movie-card__image">
        <VideoPlayer isPlaying={isPlaying} src={src} cover={cover} isMuted={true}/>
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>
          {title}
        </Link>
      </h3>
    </article>
  );

};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default MovieCard;
