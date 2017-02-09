import React from 'react'
import UsersContainer from '../containers/UsersContainer'
import Navbar from './Navigations/Navbar'
import Menu from './Navigations/Menu'

class Main extends React.Component {
  constructor () {
    super()
    this.toggleMenu = this.toggleMenu.bind(this)
    this.state = {
      menu: { open: false }
    }
  }

  toggleMenu () {
    this.setState({ menu: { open: !this.state.menu.open } })
  }

  render () {
    return (
      <div id="page-wrap">
        <Menu
          pageWrapId="page-wrap"
          isOpen={this.state.menu.open}
          toggleMenu={this.toggleMenu}
        />
        <Navbar />
        <div className="container" style={{ paddingTop: '100px' }}>
          <UsersContainer />
        </div>
      </div>
    )
  }
}

export default Main
