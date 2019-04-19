import { useActions } from "easy-peasy";
import React, { useEffect } from "react";
import Base from "../base";
import Routes from "../routes";

export const App = () => {
  const initialise = useActions(actions => actions.initialise);
  const featuredBeers = "1|2|3|4|5";

  useEffect(() => {
    initialise(featuredBeers);
  }, [featuredBeers, initialise]);

  return (
    <Base>
      <Routes />
    </Base>
  );
};
