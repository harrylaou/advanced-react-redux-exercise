import React from 'react'

const Users = ({ users, isFetching, fetchNextPage, sendMessageTo }) => (
  <div style={{ paddingBottom: '40px' }}>
    {users.map( user => (
        <div className="media" key={user.id}>
        <div className="media-left">
          <img alt="64x64" src={user.avatar_url} className="media-object" style={{ width: '64px', height: '64px' }} />
        </div>
        <div className="media-body">
          <h4 className="media-heading">{user.login}</h4>
          Github score: {user.score} | <a href={user.html_url} target="_blank">see profile</a>
        </div>
        <div className="media-right">
          <a className="btn btn-default" onClick={ () => sendMessageTo(user) }>Message</a>
        </div>
        <hr />
      </div>
    ))}
    { isFetching?
      <p className="text-center">
        <i className="fa fa-cog fa-spin fa-3x fa-fw margin-bottom"></i>
      </p>
      :
      <a className="btn btn-default btn-block" onClick={() => fetchNextPage() }>
        Load more
      </a>
    }
  </div>
)

export default Users
