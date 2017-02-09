import { RECEIVE_USERS, FETCHING_USERS } from '../actions'

const users = (state = { items: [], isFetching: false }, action) => {
  switch (action.type) {
    case RECEIVE_USERS: {
      return { items: [...state.items, ...action.users],
        isFetching: false
      }
    }
    case FETCHING_USERS:
      return { ...state,
        isFetching: action.isFetching
      }
    default:
      return state
  }
}

export default users
