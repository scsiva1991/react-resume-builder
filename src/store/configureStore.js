import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import {createLogger} from 'redux-logger';

export default function configureStore() {
  return createStore(
    reducer, applyMiddleware(...[thunk, createLogger()])
  );
}
