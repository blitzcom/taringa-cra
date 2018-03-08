import React from 'react'
import { Link } from 'react-router-dom'

import { humanizeNum } from '../../Utils'

const User = props => {
  const fullname = `${props.firstname} ${props.lastname}`

  return (
    <div className="col-12 col-md-6 mb-4">
      <div className="card">
        <div className="card-body p-2 d-flex">
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
          <div style={{ overflow: 'hidden' }}>
            <h6 className="m-0 text-truncate" title={fullname}>
              {fullname}
            </h6>
            <Link to={`/u/${props.username}`} style={{ fontSize: '90%' }}>
              @{props.username}
            </Link>

            <p className="mb-0 mt-1 text-muted small">
              {humanizeNum(props.followers)} seguidores &nbsp;
              {humanizeNum(props.following)} siguiendo &nbsp;
              {humanizeNum(props.stories)} posts
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
