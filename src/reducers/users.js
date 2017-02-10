import { USERS_RECEIVE, FETCHING_USERS } from '../actions/users'

const users = (state = { items: [], isFetching: false, nextPageUrl: null }, action) => {
  switch (action.type) {
    case USERS_RECEIVE: {
      return {
        ...state,
        items: [ ...state.items, ...action.payload.items ],
        nextPageUrl: action.payload.nextPageUrl
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
