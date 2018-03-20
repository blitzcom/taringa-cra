import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Stat from '../../common/Stat'

export const UserMini = props => {
  const fullname = `${props.firstname} ${props.lastname}`

  return (
    <div className="col-12 col-md-6 mb-4">
      <div className="card">
        <div className="card-body p-2 d-flex">
          <img
            src={props.avatar}
            className="rounded mr-3 border"
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
            <h6
              className="m-0 text-truncate"
              title={fullname}
              style={{ fontSize: '90%' }}
            >
              {fullname}
            </h6>
            <Link
              to={`/u/${props.username}`}
              style={{ fontSize: '85%', display: 'block', lineHeight: 1.2 }}
            >
              @{props.username}
            </Link>

            <div className="mt-2">
              <Stat
                count={props.followers}
                label="seguidor"
                plural="seguidores"
              />
              <Stat
                className="ml-3"
                count={props.following}
                label="siguiendo"
                plural="siguiendo"
              />
              <Stat className="ml-3" count={props.stories} label="post" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return state.entities.users[ownProps.id]
}

export default connect(mapStateToProps)(UserMini)
