import { combineReducers } from 'redux'
//import users from './users'
import ui from './ui'
import message from './message'
import { entities } from './entities'
import pagination from './pagination'

const reducers = combineReducers({
  entities,
  pagination,
  //users,
  message,
  ui
})

export default reducers
