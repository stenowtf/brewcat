import { useActions, useStore } from "easy-peasy";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Error } from "../../base/common/error";
import { NoResults } from "../../base/common/noResults";

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
        <article className="pa3 pa5-ns black-70">
          <h1 className="f3 f1-m f-headline-l">{beer.name}</h1>
          <h2 className="measure f2 pb4 lh-title mt0 bb bw1 fw1 baskerville i">
            {beer.tagline}
          </h2>
          <article className="cf">
            <p className="measure f3 lh-copy">{beer.description}</p>
            <p className="measure i lh-copy">
              {"Brewers tips: "}
              {beer.brewers_tips}
            </p>
            {beer.food_pairing && (
              <p className="measure lh-copy">
                {"Food pairing:"}
                {beer.food_pairing.map((food, index) => (
                  <li key={index}>{food}</li>
                ))}
              </p>
            )}
            <p className="measure lh-copy">
              {"Stats:"}
              <li>ABV: {beer.abv}</li>
              <li>IBU: {beer.ibu}</li>
              <li>EBC: {beer.ebc}</li>
            </p>
            {beer.ingredients && (
              <>
                <p className="measure lh-copy">
                  {"Yeast: "}
                  {beer.ingredients.yeast}
                </p>
                <p className="measure lh-copy">
                  {"Malt: "}
                  {beer.ingredients.malt.map((malt, index) => (
                    <li key={index}>
                      {malt.name} ({malt.amount.value} {malt.amount.unit})
                    </li>
                  ))}
                </p>
                <p className="measure lh-copy">
                  {"Hops: "}
                  {beer.ingredients.hops.map((hop, index) => (
                    <li key={index}>
                      {hop.name} ({hop.amount.value} {hop.amount.unit})
                    </li>
                  ))}
                </p>
              </>
            )}
            <p className="measure lh-copy">
              {"First brewed: "}
              {beer.first_brewed}
            </p>
            <p className="measure lh-copy">
              {"Contributed by: "}
              {beer.contributed_by}
            </p>
            <p className="measure lh-copy">
              {"Image URL: "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={beer.image_url}
                title={`Beer “${beer.name}” image`}
              >
                {beer.image_url}
              </a>
            </p>
          </article>
        </article>
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
