import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

export const Base = ({ children }) => (
  <>
    <div className="flex justify-between">
      <p className="light-purple">
        <Link to="/">brewcat</Link>
      </p>
      <p className="light-purple">
        <Link to="/catalog">catalog</Link>
      </p>
    </div>
    <>{children}</>
  </>
);

Base.propTypes = {
  children: PropTypes.node
};
