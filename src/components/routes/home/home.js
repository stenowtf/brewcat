import { useStore } from "easy-peasy";
import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const featured = useStore(state => state.catalog.featured);

  return (
    <>
      {featured.map(beer => (
        <div key={beer.id}>
          <Link to={`/${beer.id}`}>{beer.name}</Link>
        </div>
      ))}
    </>
  );
};

Home.propTypes = {};
