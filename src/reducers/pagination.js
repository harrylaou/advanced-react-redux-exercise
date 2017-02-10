import { combineReducers } from 'redux'
import paginate from './paginate'
import * as ActionTypes from '../actions/users'

const pagination = combineReducers({
  users: paginate({
    types: [
      ActionTypes.USERS_REQUEST,
      ActionTypes.USERS_RECEIVE,
      ActionTypes.USERS_FAILURE
    ]
  })
})

export default pagination
