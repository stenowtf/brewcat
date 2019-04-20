import PropTypes from "prop-types";
import React from "react";

export const Error = ({ error }) => (
  <div className="tc">
    <p className="f2 pb4 lh-title mt0 bw1 fw1 baskerville i">
      {error.status}: {error.message}
    </p>
    <img src={error.cat} />
  </div>
);

Error.propTypes = {
  error: PropTypes.object
};
