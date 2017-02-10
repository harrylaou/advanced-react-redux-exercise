import React from 'react'

const NewMessage = ({ user }) => (
  <div>
    <h4>Message {user.login}</h4>
    <img className="img-responsive" src={user.avatar_url} />
      <div className="form-group">
        <textarea
          className="form-control"
          style={{ marginTop: '-5px' }}
          rows="5"
          placeholder="Hello!" />
      </div>
      <button className="btn btn-warning btn-block">Send message</button>
  </div>
)

export default NewMessage
