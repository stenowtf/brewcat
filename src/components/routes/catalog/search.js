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
      <p>Search:</p>
      <div>
        <label htmlFor="beer_name">Beer name:</label>
        <input
          type="text"
          id="beer_name"
          name="beer_name"
          minLength="0"
          maxLength="50"
          onChange={handleChange("beer_name")}
          value={params.beer_name}
        />
      </div>
      <div>
        <label htmlFor="yeast">Yeast:</label>
        <input
          type="text"
          id="yeast"
          name="yeast"
          minLength="0"
          maxLength="50"
          onChange={handleChange("yeast")}
          value={params.yeast}
        />
      </div>
      <div>
        <label htmlFor="hops">Hops:</label>
        <input
          type="text"
          id="hops"
          name="hops"
          minLength="0"
          maxLength="50"
          onChange={handleChange("hops")}
          value={params.hops}
        />
      </div>
      <div>
        <label htmlFor="malt">Malt:</label>
        <input
          type="text"
          id="malt"
          name="malt"
          minLength="0"
          maxLength="50"
          onChange={handleChange("malt")}
          value={params.malt}
        />
      </div>
      <div>
        <label htmlFor="food">Food:</label>
        <input
          type="text"
          id="food"
          name="food"
          minLength="0"
          maxLength="50"
          onChange={handleChange("food")}
          value={params.food}
        />
      </div>
      <div>
        <label htmlFor="abv_gt">ABV greater than:</label>
        <input
          type="number"
          id="abv_gt"
          name="abv_gt"
          min="0"
          max="20"
          onChange={handleChange("abv_gt")}
          value={params.abv_gt}
        />
      </div>
      <div>
        <label htmlFor="abv_lt">ABV less than:</label>
        <input
          type="number"
          id="abv_lt"
          name="abv_lt"
          min="0"
          max="20"
          onChange={handleChange("abv_lt")}
          value={params.abv_lt}
        />
      </div>
      <div>
        <label htmlFor="ibu_gt">IBU greater than:</label>
        <input
          type="number"
          id="ibu_gt"
          name="ibu_gt"
          min="0"
          max="120"
          onChange={handleChange("ibu_gt")}
          value={params.ibu_gt}
        />
      </div>
      <div>
        <label htmlFor="ibu_lt">IBU less than:</label>
        <input
          type="number"
          id="ibu_lt"
          name="ibu_lt"
          min="0"
          max="120"
          onChange={handleChange("ibu_lt")}
          value={params.ibu_lt}
        />
      </div>
      <div>
        <label htmlFor="ebc_gt">EBC greater than:</label>
        <input
          type="number"
          id="ebc_gt"
          name="ebc_gt"
          min="0"
          max="100"
          onChange={handleChange("ebc_gt")}
          value={params.ebc_gt}
        />
      </div>
      <div>
        <label htmlFor="ebc_lt">EBC less than:</label>
        <input
          type="number"
          id="ebc_lt"
          name="ebc_lt"
          min="0"
          max="100"
          onChange={handleChange("ebc_lt")}
          value={params.ebc_lt}
        />
      </div>
      <input type="button" value="Search" onClick={() => handleSubmit()} />
      <input type="button" value="Clear" onClick={() => handleClear()} />
    </>
  );
};

Search.propTypes = {
  fetchParams: PropTypes.func.isRequired
};
