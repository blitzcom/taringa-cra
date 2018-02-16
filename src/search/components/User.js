import React from 'react'
import { Link } from 'react-router-dom'

const User = props => {
  return (
    <div className="col-6 mb-4">
      <div className="card">
        <div className="card-body p-3 d-flex">
          <img
            src={props.avatar}
            className="rounded mr-3"
            alt={props.username}
            style={{
              height: 68,
              maxHeight: 68,
              maxWidth: 68,
              minHeight: 68,
              minWidth: 68,
              width: 68,
            }}
          />
          <div>
            <h6 className="m-0">
              {props.firstname} {props.lastname}
            </h6>
            <Link to={`/u/${props.username}`} style={{ fontSize: '90%' }}>
              @{props.username}
            </Link>

            <p className="mb-0 mt-1 text-muted small">
              {props.followers} seguidores &nbsp;
              {props.following} siguiendo &nbsp;
              {props.stories} posts
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
