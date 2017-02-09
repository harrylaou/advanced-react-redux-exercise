import React from 'react'
import { connect } from 'react-redux'
import NewMessage from '../components/Chat/NewMessage'

class ChatContainer extends React.Component {
  render() {
    return <NewMessage
      user={ this.props.user }
    />
  }
}

ChatContainer.propTypes = {
  user: React.PropTypes.object
}

const mapStateToProps = state => ({
  user: state.message.to
})

export default connect(
  mapStateToProps
)(ChatContainer)
