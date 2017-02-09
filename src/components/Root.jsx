import React from 'react'
import { Provider } from 'react-redux'
import '../assets/css/main.css'
import Main from '../components/Main'

const Root = ({ store }) => (
  <Provider store={store}>
    <Main />
  </Provider>
)

Root.propTypes = {
  store: React.PropTypes.object
}

export default Root
