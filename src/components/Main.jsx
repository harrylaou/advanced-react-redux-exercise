import React from 'react'
import UsersContainer from '../containers/UsersContainer'
import Navbar from './Navigations/Navbar'
import Menu from './Navigations/Menu'

const Main = () => (
  <div id="page-wrap">
    <Menu pageWrapId="page-wrap" />
    <Navbar />
    <div className="container" style={{ paddingTop: '100px' }}>
      <UsersContainer />
    </div>
  </div>
)

export default Main
