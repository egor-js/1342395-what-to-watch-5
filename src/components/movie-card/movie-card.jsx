import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player";

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
  console.log(`isPlaying now ${isPlaying}`);
  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        onMouseEnter(id);
      }}
      onMouseLeave={() => {
        onMouseLeave();
      }}>
      <div id={id}
        className="small-movie-card__image">
        <VideoPlayer isPlaying={isPlaying} src={src} cover={cover} />
        {/* <img src={cover} alt={title} width="280" height="175" /> */}
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
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
