import React from 'react'
import chai, { expect, assert } from 'chai'
import { mount, shallow } from 'enzyme'
import sinon from 'sinon'
import 'sinon-as-promised'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

import Users from './Users'

describe('#Users Component:', ()=>{
  it('should contain a list of users', () => {
    const users = [
      {
        id: 1,
        avatar_url: '',
        login: '',
        html_url: '',
        score: ''
      }
    ]

    const props = {
      users,
      isFetching: true,
      fetchNextPage: () => {},
      sendMessageTo: () => {}
    }

    const wrapper = shallow(
      <Users {...props} />
    )
    const listWrapper = wrapper.find('div.media')

    assert.equal(listWrapper.length, 1)
    assert.ok(listWrapper.children())
  })
})