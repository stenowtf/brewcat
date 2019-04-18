import { useActions } from "easy-peasy";
import PropTypes from "prop-types";
import React, { StrictMode, useEffect } from "react";
import Base from "../base";
import Routes from "../routes";

const WithStrict = ({ strict, children }) =>
  strict ? <StrictMode>{children}</StrictMode> : children;

export const App = () => {
  const initialise = useActions(actions => actions.initialise);

  useEffect(() => {
    initialise();
  }, [initialise]);

  return (
    <WithStrict strict={false}>
      <Base>
        <Routes />
      </Base>
    </WithStrict>
  );
};

WithStrict.propTypes = {
  strict: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};
