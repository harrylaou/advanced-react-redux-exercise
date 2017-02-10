import * as api from '../api'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const FETCHING_USERS = 'FETCHING_USERS'

export const receiveUsers = (users, nextUrl) => ({
  type: RECEIVE_USERS,
  users,
  nextUrl
})

export const fechingUsers = isFetching => ({
  type: FETCHING_USERS,
  isFetching
})
