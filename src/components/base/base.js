import PropTypes from "prop-types";
import React from "react";

export const Base = ({ children }) => <>{children}</>;
Base.propTypes = {
  children: PropTypes.node
};
