import { RECEIVE_USERS, FETCHING_USERS } from '../actions/users'

const users = (state = { items: [], isFetching: false, nextUrl: null }, action) => {
  switch (action.type) {
    case RECEIVE_USERS: {
      return {
        ...state,
        items: [...state.items, ...action.users],
        nextUrl: action.nextUrl
      }
    }
    case FETCHING_USERS:
      return {
        ...state,
        isFetching: action.isFetching
      }
    default:
      return state
  }
}

export default users
