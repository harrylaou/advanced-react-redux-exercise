export const selectUsers = state => {
  // const result = state.users.result
  // const users = state.users.items
  const users = state.entities.users
  const result = state.pagination.users.ids || []

  return result.map( login => users[login])
}

export const selectNextPageUrl = state => (
  state.pagination.users.nextPageUrl
)

export const selectIsFetchingUsers = state => (
  state.pagination.users.isFetching
)
