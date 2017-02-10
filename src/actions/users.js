//import { CALL_API, getJSON } from 'redux-api-middleware';
import { CALL_API, Schemas } from '../middleware/api';
import linkHeader from 'parse-link-header'
import { API_SEARCH_USER_BASE_URL } from '../config'

export const USERS_REQUEST = 'USERS_REQUEST'
export const USERS_RECEIVE = 'USERS_RECEIVE'
export const USERS_FAILURE = 'USERS_FAILURE'

export const fetchUsers = ({ nextUrl, query }) => {
  const endpoint = nextUrl || `${API_SEARCH_USER_BASE_URL}?q=${query}&sort=followers`
  return {
    [CALL_API]: {
      endpoint,
      method: 'GET',
      schema: Schemas.USER_ARRAY,
      types: [
        USERS_REQUEST,
        USERS_RECEIVE,
        /*
        {
          type: USERS_RECEIVE,
          payload: (action, state, res) => getJSON(res).then(
            data => ({
              nextUrl: linkHeader(res.headers.getAll('Link')[0]).next.url,
              items: data.items
            })
          )
        },
        */
        USERS_RECEIVE
      ]
    }
  }
}
