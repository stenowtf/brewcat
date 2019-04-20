import { useStore } from "easy-peasy";
import React from "react";
import { Link } from "react-router-dom";
import { Error } from "../../base/error";
import { NoResults } from "../../base/noResults";

export const Home = () => {
  const featured = useStore(state => state.catalog.featured);
  const error = useStore(state => state.catalog.error);

  return (
    <>
      <p>Featured beers:</p>
      {featured.length > 0 ? (
        featured.map(beer => (
          <div key={beer.id}>
            <Link to={`/beer/${beer.id}`}>{beer.name}</Link>
          </div>
        ))
      ) : error.status !== "" ? (
        <Error error={error} />
      ) : (
        <NoResults />
      )}
    </>
  );
};

Home.propTypes = {};
