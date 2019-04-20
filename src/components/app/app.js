import { useActions } from "easy-peasy";
import React, { useEffect } from "react";
import Base from "../base";
import Routes from "../routes";

export const App = () => {
  const initialise = useActions(actions => actions.initialise);
  const featuredBeers = "75|155|160|281|298";

  useEffect(() => {
    initialise(featuredBeers);
  }, [featuredBeers, initialise]);

  return (
    <Base>
      <Routes />
    </Base>
  );
};
