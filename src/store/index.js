import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
// import { API } from '../middleware';

export default function configureStore(initialState) {
  const middleware = applyMiddleware(thunk);
  const store = compose(composeWithDevTools(middleware))(createStore)(rootReducer, initialState);
  global.store = store;
  return store;
}
