import { useActions, useStore } from "easy-peasy";
import React, { useEffect, useState } from "react";
import { Error } from "../../base/common/error";
import { NoResults } from "../../base/common/noResults";
import { Search } from "../catalog/search";

export const Catalog = () => {
  const fetchBeers = useActions(actions => actions.catalog.fetchBeers);
  const beers = useStore(state => state.catalog.beers);
  const error = useStore(state => state.catalog.error);

  const [page, setPage] = useState(undefined);
  const perPage = 80;

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
      <section className="w-100 mw9 center pa3 pa5-ns bg-white black-70">
        <div className="mt0-ns pt0-ns">
          <h1>{"Search the catalog"}</h1>
          <Search fetchParams={fetchParams} />
        </div>
      </section>
      <section className="w-100 mw9 center pa3 pa5-ns bg-white black-70">
        {beers.length > 0 ? (
          <div className="mt0-ns pt0-ns">
            <h1>{"Results"}</h1>
            <ul className="list ph0 pv1">
              {beers.map(beer => (
                <li key={beer.id} className="dib mr1 mb2">
                  <a
                    href={`/beer/${beer.id}`}
                    className="f6 f5-ns b db pa2 link ba b--black-20 black hover-bg-light-yellow"
                    title={`Beer “${beer.name}” page`}
                  >
                    {beer.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : error.status !== "" ? (
          <div className="mt4">
            <Error error={error} />
          </div>
        ) : (
          <NoResults />
        )}
      </section>
    </>
  );
};

Catalog.propTypes = {};
