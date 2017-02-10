import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'

const configureStore = () => {
  const store = createStore(
    reducers
  )

  return store
}

export default configureStore
