import { SIDE_MENU_VISIBILITY } from '../actions/ui'

const ui = (state = { menu: { open: false }}, action) => {
  switch (action.type) {
    case SIDE_MENU_VISIBILITY: {
      return {
        ...state,
        menu: {...state.menu, open: action.isOpen }
      }
    }
    default:
      return state
  }
}

export default ui
