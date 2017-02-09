import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore.dev'
import Root from './components/Root'

const store = configureStore()

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
)
