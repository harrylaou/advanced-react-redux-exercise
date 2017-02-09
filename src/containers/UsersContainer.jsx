import React from 'react'
import { connect } from 'react-redux'
import * as userActions from '../actions/users'
import * as uiActions from '../actions/ui'
import * as messageActions from '../actions/message'
import * as api from '../api'
import Users from '../components/User/Users'

class UsersContainer extends React.Component {
  componentDidMount() {
    this.fetch({ query: 'javascript' })
  }

  fetchNextPage = () => {
    this.fetch({ nextUrl: this.props.nextUrl })
  }

  fetch = params => {
    this.props.fechingUsers(true)
    api.fetchUsers(params).then( ({ users, nextUrl }) => {
      this.props.receiveUsers(users.items, nextUrl)
      this.props.fechingUsers(false)
    }).catch(error => {
      this.props.fechingUsers(false)
    })
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
  receiveUsers: React.PropTypes.func,
  fechingUsers: React.PropTypes.func,
  users: React.PropTypes.array,
  isFetching: React.PropTypes.bool,
  nextUrl: React.PropTypes.string,
  setIsSideMenuOpen: React.PropTypes.func,
  setMessageTo: React.PropTypes.func
}

const mapStateToProps = state => ({
  users: state.users.items,
  nextUrl: state.users.nextUrl,
  isFetching: state.users.isFetching
})

const mapDispatchToProps = ({
  receiveUsers: userActions.receiveUsers,
  fechingUsers: userActions.fechingUsers,
  setIsSideMenuOpen: uiActions.setIsSideMenuOpen,
  setMessageTo: messageActions.setMessageTo
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer)
