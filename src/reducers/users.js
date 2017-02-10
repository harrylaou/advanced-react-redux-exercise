import { USERS_RECEIVE, FETCHING_USERS } from '../actions/users'

const users = (state = { items: {}, isFetching: false, nextUrl: null, result: [] }, action) => {
  switch (action.type) {
    case USERS_RECEIVE: {
      return {
        ...state,
        items: { ...state.items, ...action.payload.entities.users },
        //items: [ ...state.items, ...action.payload.items ],
        result: [...state.result, ...action.payload.results.users ],
        nextUrl: action.payload.nextUrl
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
