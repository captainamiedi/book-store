import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducer/index';
import { composeWithDevTools } from 'redux-devtools-extension';
 
// Note: this API requires redux@>=3.1.0
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export {store}