import union from 'lodash/union'

const paginate = ({ types }) => {
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected types to be an array of three elements.')
  }
  if (!types.every(t => typeof t === 'string')) {
    throw new Error('Expected types to be strings.')
  }
  const [ requestType, successType, failureType ] = types

  const updatePagination = (state = {
    isFetching: false,
    nextPageUrl: undefined,
    ids: []
  }, action) => {
    switch (action.type) {
      case requestType:
        return {
          ...state,
          isFetching: true
        }
      case successType:
        return {
          ...state,
          isFetching: false,
          ids: union(state.ids, action.payload.result),
          nextPageUrl: action.payload.nextPageUrl,
        }
      case failureType:
        return {
          ...state,
          isFetching: false
        }
      default:
        return state
    }
  }

  return (state = {}, action) => {
    switch (action.type) {
      case requestType:
      case successType:
      case failureType:
        return {
          ...state,
          ...updatePagination(state, action)
        }
      default:
        return state
    }
  }
}

export default paginate
