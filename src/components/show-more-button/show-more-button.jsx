import React from "react";
import PropTypes from "prop-types";

const ShowMoreButton = ({onMoreClick}) => {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onMoreClick}
      >
      Show more
      </button>
    </div>);
};

ShowMoreButton.propTypes = {
  onMoreClick: PropTypes.func.isRequired,
};

export default ShowMoreButton;
