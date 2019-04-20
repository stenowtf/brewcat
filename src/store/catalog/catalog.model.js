import axios from "axios";
import { action, thunk } from "easy-peasy";

const logRemainingApiCalls = headers => {
  console.log(
    `${headers["x-ratelimit-remaining"]}/${
      headers["x-ratelimit-limit"]
    } API calls remaining.`
  );
};

const catalog = {
  featured: [],
  beers: [],
  beer: undefined,
  error: {
    status: "",
    message: "",
    cat: ""
  },
  setBeers: action((state, payload) => {
    state.beers = payload;
  }),
  setFeatured: action((state, payload) => {
    state.featured = payload;
  }),
  removeError: action(state => {
    state.error.status = "";
    state.error.message = "";
    state.error.cat = "";
  }),
  setError: action((state, error) => {
    state.beer = undefined;
    state.beers = [];
    state.featured = [];
    state.error.status = `${error.statusCode} ${error.error}`;
    state.error.message = error.message;
    state.error.cat = `https://http.cat/${error.statusCode}`;
  }),
  setBeer: action((state, payload) => {
    state.beer = payload;
  }),
  fetchBeers: thunk(async (actions, payload) => {
    axios
      .get(
        `https://api.punkapi.com/v2/beers/?page=${payload.page}&per_page=${
          payload.perPage
        }&${payload.query}`
      )
      .then(response => {
        actions.setBeers(response.data);
        actions.removeError();
        logRemainingApiCalls(response.headers);
      })
      .catch(error => {
        actions.setError(error.response.data);
        logRemainingApiCalls(error.response.headers);
      });
  }),
  fetchBeer: thunk(async (actions, payload) => {
    axios
      .get(`https://api.punkapi.com/v2/beers/${payload}`)
      .then(response => {
        actions.setBeer(response.data[0]);
        logRemainingApiCalls(response.headers);
      })
      .catch(error => {
        actions.setError(error.response.data);
        logRemainingApiCalls(error.response.headers);
      });
  }),
  fetchFeatured: thunk(async (actions, payload) => {
    axios
      .get(`https://api.punkapi.com/v2/beers/?ids=${payload}`)
      .then(response => {
        actions.setFeatured(response.data);
        logRemainingApiCalls(response.headers);
      })
      .catch(error => {
        actions.setError(error.response.data);
        logRemainingApiCalls(error.response.headers);
      });
  })
};

export default catalog;
