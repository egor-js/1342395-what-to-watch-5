import React from "react";
// import VideoPlayer from "../video-player/video-player";
import PropTypes from "prop-types";

const Player = (props) => {
  const {videoRef, src, cover, isMuted, className} = props;

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      poster={cover}
      muted={isMuted}
    />
  );
};

Player.propTypes = {
  videoRef: PropTypes.object.isRequired,
  src: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  isMuted: PropTypes.bool.isRequired,
};

export default Player;

