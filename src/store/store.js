import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const middleleware = [logger];

const composedEnhancers = compose(applyMiddleware(...middleleware));

export const store = createStore(rootReducer, undefined, composedEnhancers);
