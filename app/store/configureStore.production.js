import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from '../utils/promiseMiddleware'
import rootReducer from '../reducers';

const finalCreateStore = compose(
  applyMiddleware(thunk,promise)
)(createStore);

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
}
