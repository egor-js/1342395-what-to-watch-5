import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    const {src} = this.props;
    const video = this._videoRef.current;

    video.muted = `muted`;
    video.src = src;

    video.oncanplaythrough = () => this.setState({
      isLoading: false,
    });

  }
  // video.onplay = () => {
  //   this.setState({
  //     isPlaying: true,
  //   });
  // };

  // video.onpause = () => this.setState({
  //   isPlaying: false,
  // });

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    if (video) {
      video.oncanplaythrough = null;
      video.onplay = null;
      video.onpause = null;
      video.src = ``;
      video = null;
    }
  }


  render() {
    const {src, cover} = this.props;
    console.log(this.props);
    console.log(this._videoRef);
    return (
      <video
        ref={this._videoRef}
        className="player__video"
        src={src}
        poster={cover}
        muted={false}>
      </video>
    );
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};
