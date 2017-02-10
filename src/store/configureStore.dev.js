import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
// import { apiMiddleware } from 'redux-api-middleware';
import apiMiddleware from '../middleware/api'
import reducers from '../reducers'

const configureStore = () => {
  const store = createStore(
    reducers,
    applyMiddleware(
      apiMiddleware,
      createLogger()
    )
  )

  return store
}

export default configureStore
