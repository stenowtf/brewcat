import axios from "axios";
import { action, thunk } from "easy-peasy";

const catalog = {
  ready: false,
  featured: [],
  setFeatured: action((state, payload) => {
    state.featured.push(payload[0]);
    state.ready = true;
  }),
  fetchFeatured: thunk(async (actions, payload) => {
    // TODO: some caching!
    await payload.map(id => {
      axios.get(`https://api.punkapi.com/v2/beers/${id}`).then(res => {
        actions.setFeatured(res.data);
      });
    });
  })
};

export default catalog;
