import React from 'react'
import { Link } from 'react-router-dom'

import CardDecorator from '../../common/CardDecorator'

const UserCard = ({
  avatar,
  firstname,
  lastname,
  message,
  status,
  username,
}) => {
  return (
    <CardDecorator avatar={avatar} placeholder={status === 'fetching'}>
      <div className="card-body">
        <h5 className="card-title">
          {firstname} {lastname}
        </h5>

        <Link to={`/u/${username}`}>
          <h6 className="card-subtitle">@{username}</h6>
        </Link>

        <p className="card-text mt-3 mb-4">{message}</p>

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
  avatar: '#AVATAR',
  firstname: '#FIRSTNAME',
  lastname: '#LASTNAME',
  message: '#MESSAGE',
  status: 'success',
  username: '#USERNAME',
}

export default UserCard
