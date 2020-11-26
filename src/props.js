import PropTypes from "prop-types";

export const Props = {
  film: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    raitingGlobal: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    description1: PropTypes.string.isRequired,
    description2: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    cover: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
  users: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  reviews: PropTypes.shape({
    id: PropTypes.string.isRequired,
    filmId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};
