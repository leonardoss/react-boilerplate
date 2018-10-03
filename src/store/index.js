import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from '../reducers';
import rootSaga from '../sagas/rootSaga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const DEV_TOOLS = () => {
  const devTools = f => f;
  if (typeof window !== 'undefined') {
    return (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : devTools;
  }
  return devTools;
};

// mount it on the Store
class Store {
  constructor() {
    this.store = createStore(
      combineReducers({
        ...reducers,
      }),
      compose(
        applyMiddleware(sagaMiddleware),
        DEV_TOOLS(),
      ),
    );
    // then run the saga
    sagaMiddleware.run(rootSaga);
  }
}

export default Store;
