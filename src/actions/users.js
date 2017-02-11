import * as api from '../api'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const FETCHING_USERS = 'FETCHING_USERS'

export const fetchingUsers = isFetching => ({
  type: FETCHING_USERS,
  isFetching
})

export const fetchUsers = (params) => (dispatch, getState) => {
  const state = getState()
  if (state.users.isFetching) {
    return;
  }

  dispatch(fetchingUsers(true))
  api.fetchUsers(params).then(({ users, nextUrl }) => {
    dispatch(fetchingUsers(false))
    dispatch(receiveUsers(users, nextUrl))
  }).catch(() => {
    dispatch(fetchingUsers(false))
  })
}

export const receiveUsers = (users, nextUrl) => ({
  type: RECEIVE_USERS,
  users,
  nextUrl
})
