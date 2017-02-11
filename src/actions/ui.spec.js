import { expect } from 'chai'
import {setIsSideMenuOpen, SIDE_MENU_VISIBILITY} from './ui'

describe('#ui Action:', ()=>{
  it('Should return setIsSideMenuOpen an action formated', ()=>{
    const isOpen = true
    expect(setIsSideMenuOpen(isOpen)).to.deep.equal({
      type: SIDE_MENU_VISIBILITY,
      isOpen
    })
  })
})