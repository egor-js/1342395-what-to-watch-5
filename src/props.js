import PropTypes from "prop-types";

export const propsApp = {
  films: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
};

export const propsMain = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired,
};
