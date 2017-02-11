import { expect } from 'chai'
import {setMessageTo, SET_MESSAGE_TO} from './message'

describe('#message Action:', ()=>{
  it('Should return setMessageTo an action formated', ()=>{
    const user = 'paco'
    expect(setMessageTo(user)).to.deep.equal({
      type: SET_MESSAGE_TO,
      user
    })
  })
})