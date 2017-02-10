export const selectUsers = state => {
  //const result = state.users.result
  return state.users.items
  //const users = state.entities.users
  //const result = state.pagination.users.ids || []

}

export const selectNextPageUrl = state => (
  state.users.nextPageUrl
)

export const selectIsFetchingUsers = state => (
  state.users.isFetching
)
