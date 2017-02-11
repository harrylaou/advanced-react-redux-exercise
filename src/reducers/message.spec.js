import { expect } from 'chai'
import { SET_MESSAGE_TO } from '../actions/message'
import message from './message'

describe('#message Reducer:', ()=>{
  it('Should return default state on non recognized action', ()=>{
    expect(message(undefined, { type: 'demo'})).to.deep.equal({ to: {} })
  })

  it(`Should return state on ${SET_MESSAGE_TO}`, ()=>{
    expect(message({ message: '123' }, { type: SET_MESSAGE_TO, user: 'Pamela' })).to.deep.equal({ message: '123', to: 'Pamela' })
  })
})