import React from 'react'
import { connect } from 'react-redux'
import * as userActions from '../actions/users'
import * as uiActions from '../actions/ui'
import * as messageActions from '../actions/message'
import * as api from '../api'
import Users from '../components/User/Users'
import { selectUsers, selectNextPageUrl, selectIsFetchingUsers } from '../selectors/users'

class UsersContainer extends React.Component {
  componentDidMount() {
    this.fetch({ query: 'javascript' })
  }

  fetchNextPage = () => {
    this.fetch({ nextUrl: this.props.nextUrl })
  }

  fetch = params => {
    this.props.fetchUsers(params)
  }

  sendMessageTo = user => {
    this.props.setMessageTo(user)
    this.props.setIsSideMenuOpen(true)
  }

  render() {
    return <Users
      fetchNextPage={ this.fetchNextPage }
      users={ this.props.users }
      isFetching={ this.props.isFetching }
      sendMessageTo={ this.sendMessageTo }
    />
  }
}

UsersContainer.propTypes = {
  fechingUsers: React.PropTypes.func,
  users: React.PropTypes.array,
  isFetching: React.PropTypes.bool,
  nextUrl: React.PropTypes.string,
  setIsSideMenuOpen: React.PropTypes.func,
  setMessageTo: React.PropTypes.func
}

const mapStateToProps = state => ({
  users: selectUsers(state),
  nextUrl: selectNextPageUrl(state),
  isFetching: selectIsFetchingUsers(state)
})

const mapDispatchToProps = ({
  fetchUsers: userActions.fetchUsers,
  setIsSideMenuOpen: uiActions.setIsSideMenuOpen,
  setMessageTo: messageActions.setMessageTo
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer)
