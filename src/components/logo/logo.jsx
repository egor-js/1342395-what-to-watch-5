import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const Logo = (props) => {
  const {isFooter = false, noLink = false} = props;

  const linkClasses = `logo__link ${isFooter ? `logo__link--light` : ``}`;

  const linkContent = (
    <>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </>
  );
  return (
    <div className="logo">
      {noLink
        ? (
          <a className={linkClasses}>
            {linkContent}
          </a>
        )
        : (
          <Link to="/" className={linkClasses}>
            {linkContent}
          </Link>
        )
      }
    </div>
  );
};
Logo.propTypes = {
  isFooter: PropTypes.bool,
  noLink: PropTypes.bool,
};
export default Logo;
