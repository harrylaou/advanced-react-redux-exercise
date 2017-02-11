import React from 'react'
import chai, { expect } from 'chai'
import { mount, shallow } from 'enzyme'
import sinon from 'sinon'
import 'sinon-as-promised'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

import UsersContainer, {
  UsersContainer as UsersContainerOnly,
  mapStateToProps,
  mapDispatchToProps
} from './UsersContainer'
import {fetchUsers} from '../actions/users'
import {setIsSideMenuOpen} from '../actions/ui'
import {setMessageTo} from '../actions/message'


describe('#UsersContainer:', ()=>{
  describe('Methods: ', ()=>{

    it('#sendMessageTo', () => {
      let setMessageTo = sinon
        .stub()
        .returns("Hi BRo!")

      let setIsSideMenuOpen = sinon
        .stub()
        .returns("Hi BRo!2")

      let props = {
        setMessageTo,
        setIsSideMenuOpen
      }

      const container = shallow(
        <UsersContainerOnly
          {...props}
        />
      )

      container.instance().sendMessageTo('Paco')

      expect(setMessageTo.called).to.be.true
      expect(setIsSideMenuOpen.called).to.be.true
    })

    it('#fetchNextPage', () => {
      let fetchUsers = sinon
        .stub()
        .returns("Hi BRo!")

      let props = {
        fetchUsers,
        nextUrl: 'https'
      }

      const container = shallow(
        <UsersContainerOnly
          {...props}
        />
      )

      container.instance().fetchNextPage()

      expect(fetchUsers.called).to.be.true
    })
  })


  describe('Redux Signature: ', ()=>{
    it('mapStateToProps', ()=>{
      const state = {
        users: {
          items: [1,2,3],
          nextUrl: 'https',
          isFetching: false
        }
      }

      const props = {
        users: state.users.items,
        nextUrl: state.users.nextUrl,
        isFetching: state.users.isFetching
      }

      expect(mapStateToProps(state)).to.be.deep.equal(props)
    })

    it('mapDispatchToProps', ()=>{
      const props = {
        fetchUsers,
        setIsSideMenuOpen,
        setMessageTo
      }
      expect(mapDispatchToProps).to.be.deep.equal(props)
    })
  })
})