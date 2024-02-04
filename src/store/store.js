import { compose, createStore, applyMiddleware } from "redux";
//import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const loggweMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next();
  }
  console.log("type:", action.type);
  console.log("payload:", action.payload);
  console.log("currentState:", store.getState());

  next(action);

  console.log("next state:", store.getState());
};

const middleleware = [loggweMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleleware));

export const store = createStore(rootReducer, undefined, composedEnhancers);
