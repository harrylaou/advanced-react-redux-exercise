import merge from 'lodash/merge'

export const entities = (state = { users: {} }, action) => {
  if (action.payload && action.payload.entities) {
    return merge({}, state, action.payload.entities)
  }

  return state
}
