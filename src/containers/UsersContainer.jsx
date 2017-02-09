import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import * as api from '../api'
import Users from '../components/User/Users'
import { API_SEARCH_USER_BASE_URL } from '../config'

class UsersContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      isFetching: false,
      users: [],
      link: {}
    }
  }

  componentDidMount() {
    const {
      query = 'javascript'
    } = this.props

    this.fetch(`${API_SEARCH_USER_BASE_URL}?q=${query}&sort=sort&order=asc`)
  }

  fetchNextPage = () => {
    this.fetch(this.state.links.next)
  }

  fetch = url => {
    this.setState({ isFetching: true })
    api.fetchUsers(url).then( ({ users, link }) => {
      this.props.receiveUsers(users.items)
    })
  }

  render() {
    return <Users
      fetchUsers={ this.fetchUsers }
      users={this.props.users}
    />
  }
}

UsersContainer.propTypes = {
  receiveUsers: React.PropTypes.func,
  users: React.PropTypes.array
}

UsersContainer.defaultProps = {
  users: []
}

const mapStateToProps = state => ({
  users: state.users.items
})

const mapDispatchToProps = ({
  receiveUsers: actions.receiveUsers
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer)
