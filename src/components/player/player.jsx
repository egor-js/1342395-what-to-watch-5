import React from "react";
import VideoPlayer from "../video-player/video-player";
import PropTypes from "prop-types";

const Player = (props) => {
  const {film} = props;
  const {src, cover} = film;
  return (
    <VideoPlayer
      src={src}
      cover={cover}
    />
  );
};

Player.PropTypes = {
  film: PropTypes.shape({
    src: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
  }).isRequired,
};

export default Player;

