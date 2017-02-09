import React from 'react'

const Users = ({ users }) => (
  <div>
    {users.map( user => (
      <div className="media" key={user.login}>
        <div className="media-left">
          <img alt="64x64" src={user.avatar_url} className="media-object" style={{ width: '64px', height: '64px' }} />
        </div>
        <div className="media-body">
          <h4 className="media-heading">{user.login}</h4>
          Github score: {user.score} | <a href={user.html_url} target="_blank">see profile</a>
        </div>
        <div className="media-right">
          <a className="btn btn-default">Message</a>
        </div>
        <hr />
      </div>
    ))}
  </div>
)

export default Users
