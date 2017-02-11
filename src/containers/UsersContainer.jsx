import React from 'react'
import { connect } from 'react-redux'
import * as userActions from '../actions/users'
import * as uiActions from '../actions/ui'
import * as messageActions from '../actions/message'
import Users from '../components/User/Users'

export class UsersContainer extends React.Component {
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
      sendMessageTo={ this.sendMessageTo }
      isFetching={ this.props.isFetching }
    />
  }
}

UsersContainer.propTypes = {
  fetchUsers: React.PropTypes.func,
  users: React.PropTypes.array,
  isFetching: React.PropTypes.bool,
  nextUrl: React.PropTypes.string,
  setIsSideMenuOpen: React.PropTypes.func,
  setMessageTo: React.PropTypes.func
}

export const mapStateToProps = state => ({
  users: state.users.items,
  nextUrl: state.users.nextUrl,
  isFetching: state.users.isFetching
})

export const mapDispatchToProps = ({
  fetchUsers: userActions.fetchUsers,
  setIsSideMenuOpen: uiActions.setIsSideMenuOpen,
  setMessageTo: messageActions.setMessageTo
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer)
