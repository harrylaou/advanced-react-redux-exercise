import React from 'react'
import * as BurgerMenu from 'react-burger-menu'
import { connect } from 'react-redux'
import * as actions from '../../../actions/ui'

const SideMenu = ({ isOpen, children, pageWrapId, setIsSideMenuOpen }) => (
  <div>
    <BurgerMenu.slide
      isOpen={isOpen}
      pageWrapId={pageWrapId || 'page-wrap'}
    >
      { children }
      <a className="close-side-menu" onClick={ () => setIsSideMenuOpen(false) }>
        <i className="fa fa-close" style={{ color: '#fff', fontSize: '2em' }}></i>
      </a>
    </BurgerMenu.slide>
  </div>
)

SideMenu.propTypes = {
  isOpen: React.PropTypes.bool,
  children: React.PropTypes.object,
  pageWrapId: React.PropTypes.string,
  setIsSideMenuOpen: React.PropTypes.func
}

const mapStateToProps = state => ({
  isOpen: state.ui.menu.open
})

const mapDispatchToProps = ({
  setIsSideMenuOpen: actions.setIsSideMenuOpen
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu)

