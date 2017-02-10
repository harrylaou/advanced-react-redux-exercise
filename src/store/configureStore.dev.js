//import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'

const addLoggerMiddleware = store => {
  const rawDispatch = store.dispatch
  return (action) => {
    console.log('previous state', store.getState())
    const returnValue = rawDispatch(action)
    console.log('next state', store.getState())
    return returnValue
  }
}

const addPromiseSupportToDispatch = (store) => {
  const rawDispatch = store.dispatch;
  return (action) => {
    if (typeof action.then === 'function') {
      return action.then(rawDispatch);
    }
    return rawDispatch(action);
  };
};

const configureStore = () => {
  const store = createStore(
    reducers
  )

  store.dispatch = addLoggerMiddleware(store)
  store.dispatch = addPromiseSupportToDispatch(store)

  return store
}

export default configureStore
