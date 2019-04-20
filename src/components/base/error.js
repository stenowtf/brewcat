import PropTypes from "prop-types";
import React from "react";

export const Error = ({ error }) => (
  <div>
    <p>{error.status}</p>
    <p>{error.message}</p>
    <img src={error.cat} />
  </div>
);

Error.propTypes = {
  error: PropTypes.object
};
