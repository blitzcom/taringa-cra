import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload'

import Stat from '../../common/Stat'

const avatarStyle = {
  img: {
    height: 68,
    maxHeight: 68,
    maxWidth: 68,
    minHeight: 68,
    minWidth: 68,
    width: 68,
  },
}

export const UserMini = props => {
  const fullname = `${props.firstname} ${props.lastname}`

  return (
    <div className="col-12 col-md-6 mb-4">
      <div className="card">
        <div className="card-body p-2 d-flex">
          <div className="rounded mr-3 border" style={avatarStyle.img}>
            <LazyLoad height="auto" offset={100} debounce once>
              <img
                alt={props.username}
                className="img-fluid"
                src={props.avatar}
              />
            </LazyLoad>
          </div>

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
              <Stat
                className="ml-3 d-lg-block ml-lg-0 d-xl-inline-block ml-xl-3"
                count={props.stories}
                label="post"
              />
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
