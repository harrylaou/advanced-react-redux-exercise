import { expect } from 'chai'
import {receiveUsers, RECEIVE_USERS} from './users'

describe('#users Action:', ()=>{
  it('Should return receiveUsers action formated', ()=>{
    const users = [1, 2, 3]
    const nextUrl = 'htpps://'
    expect(receiveUsers(users, nextUrl)).to.deep.equal({
      type: RECEIVE_USERS,
      users,
      nextUrl
    })
  })
})