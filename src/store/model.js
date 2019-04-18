import { action, createStore, reducer, thunk } from "easy-peasy";
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
    initialise: thunk(async (actions, payload, { dispatch }) => {
      // await dispatch.something.fetchInit();
    })
  },
  {
    middleware: [...middlewares]
  }
);

export default store;
