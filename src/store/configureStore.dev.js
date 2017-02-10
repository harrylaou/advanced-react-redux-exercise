import createLogger from 'redux-logger';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'

const configureStore = () => {
  const store = createStore(
    reducers,
    applyMiddleware(
      promise,
      thunk,
      createLogger()
    )
  )

  return store
}

export default configureStore
