import React from 'react'
import ChatContainer from '../../containers/ChatContainer'

import SideMenu from './Menus/SideMenu'

const Menu = ({ pageWrapId }) => (
  <SideMenu pageWrapId={pageWrapId} >
    <ChatContainer />
  </SideMenu>
)

Menu.propTypes = {
  isOpen: React.PropTypes.bool,
  pageWrapId: React.PropTypes.string,
  toggleMenu: React.PropTypes.func
}

export default Menu
