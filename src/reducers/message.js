import { SET_MESSAGE_TO } from '../actions/message'

const message = (state = { to: {} }, action) => {
  switch (action.type) {
    case SET_MESSAGE_TO: {
      return {
        ...state,
        to: action.user
      }
    }
    default:
      return state
  }
}

export default message
