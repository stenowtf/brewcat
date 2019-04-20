import { useActions, useStore } from "easy-peasy";
import React, { useEffect } from "react";

export const Home = () => {
  const featured = useStore(state => state.catalog.featured);
  const fetchFeatured = useActions(actions => actions.catalog.fetchFeatured);
  const featuredBeers = "75|155|160|281|298";

  useEffect(() => {
    fetchFeatured(featuredBeers);
  }, [featuredBeers, fetchFeatured]);

  return (
    <>
      <section className="w-100 mw9 center pa3 pa5-ns bg-white black-70">
        <div className="mt0-ns pt0-ns">
          <div className="mw9 center">
            <h1 className="f1 b lh-title ma0 measure word-wrap bb bw1 b--black-05 pa3 pb4">
              BrewCat is the friendly <span className="underline">BrewDog</span>
              ’s assistant—find here all your favourite beers… and{" "}
              <span className="i">more</span>!
            </h1>
          </div>
        </div>
      </section>
      <section className="w-100 mw9 center pa3 pa5-ns bg-white black-70">
        <div className="mt0-ns pt0-ns">
          <div className="mw9 center">
            <h3 className="w-100 f6 ttu tracked mt0 pa1">
              {"Today’s specials"}
            </h3>
            {featured.map(beer => (
              <div className="pv3 f3 flex items-center flex-wrap" key={beer.id}>
                <a
                  href={`/beer/${beer.id}`}
                  className="pa1 link black hover-bg-light-yellow"
                  title={`Beer “${beer.name}” page`}
                >
                  {beer.name}
                </a>
                <p className="pa1 mv1"> — “{beer.tagline}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

Home.propTypes = {};
