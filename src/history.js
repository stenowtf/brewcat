import store from "./store/model";
import { createReduxHistory } from "./store/router/router";

const history = createReduxHistory(store);

export default history;
