import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {films} from "../../mocks/films";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this.currentFilm = films.find((film) => film.id === props.id);
    this._videoRef = createRef();
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    const {src, isMuted = false} = this.currentFilm;
    const video = this._videoRef.current;

    video.muted = isMuted;
    video.src = src;
    video.controls = !isMuted;
    video.oncanplaythrough = () => this.setState({
      isLoading: false,
    });
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.pause();
      video.load();
    }
  }

  componentWillUnmount() {
    let video = this._videoRef.current;

    if (video) {
      video.oncanplaythrough = null;
      video.onplay = null;
      video.onpause = null;
      video.src = ``;
      video = null;
    }
  }

  render() {
    const {src, cover} = this.currentFilm;
    return (
      <video
        ref={this._videoRef}
        className="player__video"
        src={src}
        poster={cover}>
      </video>
    );
  }
}

VideoPlayer.propTypes = {
  id: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};
