import { expect } from 'chai'
import { RECEIVE_USERS, FETCHING_USERS } from '../actions/users'
import users from './users'

describe('#users Reducer:', ()=>{
  it('Should return default state if state is undefined', ()=>{
    expect(users(undefined, { type: 'demo'})).to.deep.equal({ items: [], nextUrl: null, isFetching: false })
  })

  it('Should return the state on non recognized action ', ()=>{
    expect(users({ items: [], nextUrl: null, isFetching: true }, { type: 'demo'})).to.deep.equal({ items: [], nextUrl: null, isFetching: true })
  })

  it(`Should return state on ${RECEIVE_USERS}`, ()=>{
    expect(users(undefined, { type: RECEIVE_USERS, nextUrl: 'http://', users: { items: [1,2,3] } })).to.deep.equal({ items: [1,2,3], nextUrl: 'http://', isFetching: false })
  })

  it(`Should return state on ${FETCHING_USERS}`, ()=>{
    expect(users(undefined, { type: FETCHING_USERS, isFetching: true })).to.deep.equal({ items: [], nextUrl: null, isFetching: true })
  })
})