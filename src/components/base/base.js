import PropTypes from "prop-types";
import React from "react";

export const Base = ({ children }) => (
  <>
    <header className="w-100 pa3 ph5-ns bg-white bb bw1 b--black-05">
      <div className="db dt-ns mw9 center w-100">
        <div className="db dtc-ns v-mid tl w-50">
          <a
            href="/"
            className="dib f5 f4-ns fw6 mt0 mb1 link black-70 hover-bg-light-yellow pa1"
            title="Home"
          >
            {"BrewCat"}
          </a>
        </div>
        <nav className="db dtc-ns v-mid w-100 tl tr-ns mt2 mt0-ns">
          <a
            title="Catalog"
            href="/catalog"
            className="f6 fw6 hover-bg-light-yellow link black-70 dib pa1"
          >
            {"Catalog"}
          </a>
        </nav>
      </div>
    </header>
    <>{children}</>
  </>
);

Base.propTypes = {
  children: PropTypes.node
};
