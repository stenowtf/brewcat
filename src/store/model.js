import { action, createStore, reducer } from "easy-peasy";
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
    catalog
  },
  {
    middleware: [...middlewares]
  }
);

export default store;
