import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import CardDecorator from '../../common/CardDecorator'
import { userSelector, controlSelector } from '../selectors'
import withResource from '../../HOC/Resource'
import { fetchTrigger } from '../actions'

export const UserCard = ({ control, user }) => {
  return (
    <CardDecorator
      avatar={user.avatar}
      placeholder={control.status === 'fetching'}
    >
      <div className="card-body">
        <h5 className="card-title">
          {user.firstname} {user.lastname}
        </h5>

        <Link to={`/u/${user.username}`}>
          <h6 className="card-subtitle">@{user.username}</h6>
        </Link>

        <p className="card-text mt-3 mb-4">{user.message}</p>

        <button className="btn btn-primary btn-block font-weight-bold mb-3">
          SEGUIR
        </button>

        <p className="text-muted small mb-0">
          Siguiendo a este usuario podrás ver sus publicaciones en tu página de
          inicio
        </p>
      </div>
    </CardDecorator>
  )
}

UserCard.defaultProps = {
  user: {},
}

const mapStateToProps = (state, props) => ({
  user: userSelector(state, props),
  control: controlSelector(state, props),
})

const mapDispatchToProps = (dispatch, props) => ({
  fetchResource: () => dispatch(fetchTrigger(props.id)),
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(withResource()(UserCard))
)
