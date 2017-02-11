import { expect } from 'chai'
import { SIDE_MENU_VISIBILITY } from '../actions/ui'
import ui from './ui'

describe('#ui Reducer:', ()=>{
  it('Should return default state on non recognized action', ()=>{
    expect(ui(undefined, { type: 'demo'})).to.deep.equal({ menu: { open: false }})
  })

  it(`Should return state on ${SIDE_MENU_VISIBILITY}`, ()=>{
    expect(ui(undefined, { type: SIDE_MENU_VISIBILITY, isOpen: true })).to.deep.equal({ menu: { open: true }})
  })
})