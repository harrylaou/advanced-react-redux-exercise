import React from 'react'

import SideMenu from './Menus/SideMenu'

const Menu = ({ isOpen, pageWrapId, toggleMenu }) => (
  <SideMenu
    isOpen={isOpen}
    toggleMenu={toggleMenu}
  >
    <h3 style={{ paddingTop: '50px' }}>
      Send a message
    </h3>
  </SideMenu>
)

Menu.propTypes = {
  isOpen: React.PropTypes.bool,
  pageWrapId: React.PropTypes.string,
  toggleMenu: React.PropTypes.func
}

export default Menu
