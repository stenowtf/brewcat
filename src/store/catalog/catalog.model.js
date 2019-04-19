import axios from "axios";
import { action, thunk } from "easy-peasy";

// TODO: some caching!

const catalog = {
  featured: [],
  beers: [],
  setBeers: action((state, payload) => {
    state.beers = payload;
  }),
  setFeatured: action((state, payload) => {
    state.featured = payload;
  }),
  fetchBeers: thunk(async (actions, payload) => {
    axios
      .get(
        `https://api.punkapi.com/v2/beers/?page=${payload.page}&per_page=${
          payload.perPage
        }&${payload.query}`
      )
      .then(res => {
        actions.setBeers(res.data);
      });
  }),
  fetchFeatured: thunk(async (actions, payload) => {
    axios.get(`https://api.punkapi.com/v2/beers/?ids=${payload}`).then(res => {
      actions.setFeatured(res.data);
    });
  })
};

export default catalog;
