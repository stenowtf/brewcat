import PropTypes from "prop-types";
import React from "react";

export const Beer = ({ match }) => <>{`Beer: ${match.params.id}`}</>;

Beer.propTypes = {
  match: PropTypes.object.isRequired
};
