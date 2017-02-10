import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'

const addLoggerMiddleware = store => next => {
  return (action) => {
    console.group(action.type);
    console.log('prev state', store.getState());
    console.log('action', action);
    const returnValue = next(action);
    console.log('next state', store.getState());
    console.groupEnd(action.type);
    return returnValue;
  }
}

const addPromiseSupportToDispatch = (store) => next => {
  return (action) => {
    if (typeof action.then === 'function') {
      return action.then(next);
    }
    return next(action);
  }
}

const configureStore = () => {
  const store = createStore(
    reducers
  )
/*
  store.dispatch = addLoggerMiddleware(store)(store.dispatch)
  store.dispatch = addPromiseSupportToDispatch(store)(store.dispatch)
*/
  wrapDispatchWithMiddlewares(store, [addPromiseSupportToDispatch, addLoggerMiddleware])

  return store
}

const wrapDispatchWithMiddlewares = (store, middlewares) =>
  middlewares.slice().reverse().forEach(middleware => {
    store.dispatch = middleware(store)(store.dispatch)
  })

// wrapDispatchWithMiddlewares(store, [addPromiseSupportToDispatch, addLoggerMiddleware])

export default configureStore
