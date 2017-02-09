// import { API_SEARCH_USER_BASE_URL } from '../config'

export const fetchUsers = (url) => (
  fetch(url).then( response => {
    const link = response.headers.getAll('Link')[0]

    return response.json().then( users => ({
      link,
      users
    }))
  })
)
