import { useActions, useStore } from "easy-peasy";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Error } from "../../base/error";
import { NoResults } from "../../base/noResults";

export const Beer = ({ match }) => {
  const fetchBeer = useActions(actions => actions.catalog.fetchBeer);
  const beer = useStore(state => state.catalog.beer);
  const error = useStore(state => state.catalog.error);

  useEffect(() => {
    fetchBeer(match.params.id);
  }, [fetchBeer, match.params.id]);

  return (
    <>
      {beer ? (
        <div>
          {beer.name}
          {beer.tagline}
        </div>
      ) : error.status !== "" ? (
        <Error error={error} />
      ) : (
        <NoResults />
      )}
    </>
  );
};

Beer.propTypes = {
  match: PropTypes.object.isRequired
};
