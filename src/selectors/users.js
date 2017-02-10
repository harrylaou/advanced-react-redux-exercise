export const selectUsers = state => {
  return state.users.items
}

export const selectNextPageUrl = state => (
  state.users.nextPageUrl
)

export const selectIsFetchingUsers = state => (
  state.users.isFetching
)
