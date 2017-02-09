import linkHeader from 'parse-link-header'

import { API_SEARCH_USER_BASE_URL } from '../config'

export const fetchUsers = ({ nextUrl, query }) => {
  const url = nextUrl || `${API_SEARCH_USER_BASE_URL}?q=${query}&sort=followers`

  return fetch(url).then( response => {
    const link = linkHeader(response.headers.getAll('Link')[0])
    return response.json().then( users => ({
      nextUrl: link.next.url,
      users
    }))
  })
}
