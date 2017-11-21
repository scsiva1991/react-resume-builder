import {createStore, applyMiddleware, compose} from 'redux';
import reducer from '../reducers';
import {createLogger} from 'redux-logger';

export default createStore(
  reducer,
  undefined,
  compose(
      applyMiddleware(...[createLogger()])
  )
);
