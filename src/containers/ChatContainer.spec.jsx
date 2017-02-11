import React from 'react'
import chai, { expect } from 'chai'
import { mount, shallow } from 'enzyme'
import sinon from 'sinon'
import 'sinon-as-promised'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

import ChatContainer, {
  ChatContainer as ChatContainerOnly,
  mapStateToProps
} from './ChatContainer'


describe('#ChatContainer:', ()=>{

  describe('Redux Signature: ', ()=>{
    it('mapStateToProps', ()=>{
      const state = {
        message: {
          to: 'mail@mail.com'
        }
      }

      const props = {
        user: state.message.to
      }

      expect(mapStateToProps(state)).to.be.deep.equal(props)
    })
  })
})