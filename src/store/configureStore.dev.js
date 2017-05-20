import {createStore, applyMiddleware} from 'redux'
import reducers from '../reducers'

const addLoggerMiddleware = store => {
  const rawDispatch = store.dispatch
  return (action) => {
    console.group(action.type);
    console.log('prev state', store.getState());
    console.log('action', action);
    const returnValue = rawDispatch(action);
    console.log('next state', store.getState());
    console.groupEnd(action.type);
    return returnValue;
  }
}

const addPromiseMiddleware = store => {
  const rawDispatch = store.dispatch
  return (action) => {

    if (typeof action.then === "function") {
      action.then(data => rawDispatch(data))
    } else {
      return rawDispatch(action);
    }


  }
}

const configureStore = () => {
  const store = createStore(reducers)

  store.dispatch = addLoggerMiddleware(store)
  store.dispatch = addPromiseMiddleware(store)

  return store
}

export default configureStore
