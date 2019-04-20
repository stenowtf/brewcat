import PropTypes from "prop-types";
import React, { useState } from "react";

const INITIAL_STATE = {
  beer_name: "",
  yeast: "",
  hops: "",
  malt: "",
  food: "",
  abv_gt: "",
  abv_lt: "",
  ibu_gt: "",
  ibu_lt: "",
  ebc_gt: "",
  ebc_lt: ""
};

export const Search = ({ fetchParams }) => {
  const [params, setParams] = useState(INITIAL_STATE);

  const handleSubmit = () => {
    fetchParams(params);
  };

  const handleChange = prop => event => {
    setParams({ ...params, [prop]: event.target.value });
  };

  const handleClear = () => {
    setParams(INITIAL_STATE);
  };

  return (
    <>
      <div className="measure pv2 pr2">
        <label htmlFor="beer_name" className="f6 b db mb2">
          {"Beer name"} <span className="normal black-60">{"(optional)"}</span>
        </label>
        <input
          type="text"
          id="beer_name"
          name="beer_name"
          minLength="0"
          maxLength="50"
          onChange={handleChange("beer_name")}
          value={params.beer_name}
          className="input-reset ba b--black-20 pa2 mb2 db w-100"
          aria-describedby="beer_name-desc"
        />
        <small id="beer_name-desc" className="f6 black-60 db mb2">
          {
            "Returns all beers matching the supplied name (this will match partial strings as well so e.g punk will return Punk IPA)."
          }
        </small>
      </div>

      <section className="cf">
        <div className="fl w-100 w-50-m w-25-l pv2 pr2">
          <label htmlFor="yeast" className="f6 b db mb2">
            {"Yeast"} <span className="normal black-60">{"(optional)"}</span>
          </label>
          <input
            type="text"
            id="yeast"
            name="yeast"
            minLength="0"
            maxLength="50"
            onChange={handleChange("yeast")}
            value={params.yeast}
            className="input-reset ba b--black-20 pa2 mb2 db w-100"
            aria-describedby="yeast-desc"
          />
          <small id="yeast-desc" className="f6 black-60 db mb2">
            {
              "Returns all beers matching the supplied yeast name, this performs a fuzzy match."
            }
          </small>
        </div>
        <div className="fl w-100 w-50-m w-25-l pv2 pr2">
          <label htmlFor="hops" className="f6 b db mb2">
            {"Hops"} <span className="normal black-60">{"(optional)"}</span>
          </label>
          <input
            type="text"
            id="hops"
            name="hops"
            minLength="0"
            maxLength="50"
            onChange={handleChange("hops")}
            value={params.hops}
            className="input-reset ba b--black-20 pa2 mb2 db w-100"
            aria-describedby="hops-desc"
          />
          <small id="hops-desc" className="f6 black-60 db mb2">
            {
              "Returns all beers matching the supplied hops name, this performs a fuzzy match."
            }
          </small>
        </div>
        <div className="fl w-100 w-50-m w-25-l pv2 pr2">
          <label htmlFor="malt" className="f6 b db mb2">
            {"Malt"} <span className="normal black-60">{"(optional)"}</span>
          </label>
          <input
            type="text"
            id="malt"
            name="malt"
            minLength="0"
            maxLength="50"
            onChange={handleChange("malt")}
            value={params.malt}
            className="input-reset ba b--black-20 pa2 mb2 db w-100"
            aria-describedby="malt-desc"
          />
          <small id="malt-desc" className="f6 black-60 db mb2">
            {
              "Returns all beers matching the supplied malt name, this performs a fuzzy match."
            }
          </small>
        </div>
        <div className="fl w-100 w-50-m w-25-l pv2 pr2">
          <label htmlFor="food" className="f6 b db mb2">
            {"Food"} <span className="normal black-60">{"(optional)"}</span>
          </label>
          <input
            type="text"
            id="food"
            name="food"
            minLength="0"
            maxLength="50"
            onChange={handleChange("food")}
            value={params.food}
            className="input-reset ba b--black-20 pa2 mb2 db w-100"
            aria-describedby="food-desc"
          />
          <small id="food-desc" className="f6 black-60 db mb2">
            {
              "Returns all beers matching the supplied food string, this performs a fuzzy match."
            }
          </small>
        </div>
      </section>

      <section className="cf">
        <div className="fl w-100 w-50-m w-25-l pv2 pr2">
          <label htmlFor="abv_gt" className="f6 b db mb2">
            {"ABV greater than"}{" "}
            <span className="normal black-60">{"(optional)"}</span>
          </label>
          <input
            type="number"
            id="abv_gt"
            name="abv_gt"
            min="0"
            max="20"
            onChange={handleChange("abv_gt")}
            value={params.abv_gt}
            className="input-reset ba b--black-20 pa2 mb2 db w-100"
            aria-describedby="abv_gt-desc"
          />
          <small id="abv_gt-desc" className="f6 black-60 db mb2">
            {"Returns all beers with ABV greater than the supplied number."}
          </small>
        </div>
        <div className="fl w-100 w-50-m w-25-l pv2 pr2">
          <label htmlFor="abv_lt" className="f6 b db mb2">
            {"ABV less than"}{" "}
            <span className="normal black-60">{"(optional)"}</span>
          </label>
          <input
            type="number"
            id="abv_lt"
            name="abv_lt"
            min="0"
            max="20"
            onChange={handleChange("abv_lt")}
            value={params.abv_lt}
            className="input-reset ba b--black-20 pa2 mb2 db w-100"
            aria-describedby="abv_lt-desc"
          />
          <small id="abv_lt-desc" className="f6 black-60 db mb2">
            {"Returns all beers with ABV less than the supplied number."}
          </small>
        </div>
        <div className="fl w-100 w-50-m w-25-l pv2 pr2">
          <label htmlFor="ibu_gt" className="f6 b db mb2">
            {"IBU greater than"}{" "}
            <span className="normal black-60">{"(optional)"}</span>
          </label>
          <input
            type="number"
            id="ibu_gt"
            name="ibu_gt"
            min="0"
            max="120"
            onChange={handleChange("ibu_gt")}
            value={params.ibu_gt}
            className="input-reset ba b--black-20 pa2 mb2 db w-100"
            aria-describedby="ibu_gt-desc"
          />
          <small id="ibu_gt-desc" className="f6 black-60 db mb2">
            {
              "Returns all beers matching the supplied food string, this performs a fuzzy match."
            }
          </small>
        </div>
        <div className="fl w-100 w-50-m w-25-l pv2 pr2">
          <label htmlFor="ibu_lt" className="f6 b db mb2">
            {"IBU less than"}{" "}
            <span className="normal black-60">{"(optional)"}</span>
          </label>
          <input
            type="number"
            id="ibu_lt"
            name="ibu_lt"
            min="0"
            max="120"
            onChange={handleChange("ibu_lt")}
            value={params.ibu_lt}
            className="input-reset ba b--black-20 pa2 mb2 db w-100"
            aria-describedby="ibu_lt-desc"
          />
          <small id="ibu_lt-desc" className="f6 black-60 db mb2">
            {"Returns all beers with IBU less than the supplied number."}
          </small>
        </div>
      </section>

      <section className="cf">
        <div className="fl w-100 w-50-m w-25-l pv2 pr2">
          <label htmlFor="ebc_gt" className="f6 b db mb2">
            {"EBC greater than"}{" "}
            <span className="normal black-60">{"(optional)"}</span>
          </label>
          <input
            type="number"
            id="ebc_gt"
            name="ebc_gt"
            min="0"
            max="100"
            onChange={handleChange("ebc_gt")}
            value={params.ebc_gt}
            className="input-reset ba b--black-20 pa2 mb2 db w-100"
            aria-describedby="ebc_gt-desc"
          />
          <small id="ebc_gt-desc" className="f6 black-60 db mb2">
            {"Returns all beers with EBC greater than the supplied number."}
          </small>
        </div>
        <div className="fl w-100 w-50-m w-25-l pv2 pr2">
          <label htmlFor="ebc_lt" className="f6 b db mb2">
            {"EBC less than"}{" "}
            <span className="normal black-60">{"(optional)"}</span>
          </label>
          <input
            type="number"
            id="ebc_lt"
            name="ebc_lt"
            min="0"
            max="100"
            onChange={handleChange("ebc_lt")}
            value={params.ebc_lt}
            className="input-reset ba b--black-20 pa2 mb2 db w-100"
            aria-describedby="ebc_lt-desc"
          />
          <small id="ebc_lt-desc" className="f6 black-60 db mb2">
            {"Returns all beers with EBC less than the supplied number."}
          </small>
        </div>
        <div className="fl w-100 w-50-m w-25-l pv2 pr2" />
        <div className="fl w-100 w-50-m w-25-l pv2 pr2" />
      </section>

      <div className="flex items-center justify-center">
        <input
          className="f5 black bg-white inline-flex items-center ph3 pv2 ba border-box mr2"
          type="button"
          value="Clear"
          onClick={() => handleClear()}
        />
        <input
          className="f5 white bg-black inline-flex items-center ph3 pv2 ba border-box"
          type="button"
          value="Search"
          onClick={() => handleSubmit()}
        />
      </div>
    </>
  );
};

Search.propTypes = {
  fetchParams: PropTypes.func.isRequired
};
