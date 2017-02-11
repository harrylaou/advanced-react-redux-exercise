import { RECEIVE_USERS, FETCHING_USERS } from '../actions/users'

const users = (state = { items: [], nextUrl: null }, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        items: [...state.items, ...action.users.items],
        nextUrl: action.nextUrl
      }
    default:
      return state
  }
}

export default users
