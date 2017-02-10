import createLogger from 'redux-logger'
import promiseMiddleware from 'redux-promise'
import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'

const configureStore = () => {
  const store = createStore(
    reducers,
    applyMiddleware(
      promiseMiddleware,
      createLogger()
    )
  )

  return store
}

export default configureStore
