import { useActions, useStore } from "easy-peasy";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "../catalog/search";

export const Catalog = () => {
  const fetchBeers = useActions(actions => actions.catalog.fetchBeers);
  const beers = useStore(state => state.catalog.beers);

  const [page, setPage] = useState(undefined);
  const perPage = 25;

  const fetchParams = params => {
    const query = Object.entries(params)
      .filter(([_, val]) => val !== "")
      .map(([key, val]) => [
        key,
        val
          .trim()
          .split(" ")
          .join("_")
      ])
      .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
      .join("&");
    fetchBeers({ page, perPage, query });
  };

  useEffect(() => {
    page ? fetchBeers({ page, perPage }) : setPage(1);
  }, [fetchBeers, page, perPage]);

  return (
    <>
      <p>Catalog</p>
      <Search fetchParams={fetchParams} />
      {beers.length > 0 &&
        beers.map(beer => (
          <div key={beer.id}>
            <Link to={`/${beer.id}`}>{beer.name}</Link>
          </div>
        ))}
      {beers.length === 0 && <p>No results found.</p>}
    </>
  );
};

Catalog.propTypes = {};
