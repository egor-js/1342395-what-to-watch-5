import React, {Fragment} from "react";
import {Link} from "react-router-dom";

const PageNotFound = () => {

  return (
    <Fragment>
      <h1>
        404.
        <br />
        <small>Page not found</small>
      </h1>
      <Link to="/">
        Go to main page
      </Link>
    </Fragment>
  );
};

export default PageNotFound;
