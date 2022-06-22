import { applyMiddleware, compose, createStore, combineReducers } from "redux"
import thunk from "redux-thunk"
import blockchain from './reducer/blockchainReducer';
const rootReducer = combineReducers({
  user: blockchain,
});

const middleware = [thunk];
const composeEnhancers = compose(applyMiddleware(...middleware));

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers);
};

const store = configureStore();

export default store;
