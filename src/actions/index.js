import * as api from '../api'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const FETCHING_USERS = 'FETCHING_USERS'

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
})
