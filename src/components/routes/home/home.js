import { useStore } from "easy-peasy";
import React from "react";
import { Error } from "../../base/common/error";
import { NoResults } from "../../base/common/noResults";

export const Home = () => {
  const featured = useStore(state => state.catalog.featured);
  const error = useStore(state => state.catalog.error);

  return (
    <main className="bg-white black-70">
      <div className="ph3 ph5-ns mt0-ns pt0-ns">
        <div className="mw9 center">
          <h1 className="f1 b lh-title mt0 mb4 measure word-wrap bt bb bw1 b--black-05 pv4 ph3">
            BrewCat is the friendly <span className="underline">BrewDog</span>
            ’s assistant—find here all your favourite beers… and{" "}
            <span className="i">more</span>!
          </h1>
        </div>
      </div>
      <div className="ph3 ph5-ns mt0-ns pt0-ns">
        <div className="mw9 center">
          <h3 className="w-100 f6 ttu tracked mt0">{"Today’s specials"}</h3>
          {featured.length > 0 ? (
            featured.map(beer => (
              <div className="pv3" key={beer.id}>
                <a
                  href={`/beer/${beer.id}`}
                  className="pa1 link black hover-bg-light-yellow"
                  title={`Beer “${beer.name}” page`}
                >
                  {beer.name}
                </a>
                <p className="mv1">“{beer.tagline}”</p>
              </div>
            ))
          ) : error.status !== "" ? (
            <Error error={error} />
          ) : (
            <NoResults />
          )}
        </div>
      </div>
    </main>
  );
};

Home.propTypes = {};
