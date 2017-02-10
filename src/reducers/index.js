import { combineReducers } from 'redux'
import users from './users'
import ui from './ui'
import message from './message'

const reducers = combineReducers({
  users,
  message,
  ui
})

export default reducers
