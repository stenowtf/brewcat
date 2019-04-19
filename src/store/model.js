import { action, createStore, reducer, thunk } from "easy-peasy";
import catalog from "./catalog/catalog.model";
import loggerMiddleware from "./middleware/logger";
import { routerMiddleware, routerReducer } from "./router/router";

const middlewares = [loggerMiddleware, routerMiddleware];

const store = createStore(
  {
    router: reducer(routerReducer),
    preferences: {
      theme: "light",
      toggle: action(state => {
        state.theme = state.theme === "light" ? "dark" : "light";
      })
    },
    catalog,
    initialise: thunk(async (actions, payload, { dispatch }) => {
      await dispatch.catalog.fetchFeatured(payload);
    })
  },
  {
    middleware: [...middlewares]
  }
);

export default store;
