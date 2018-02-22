import React from 'react'
import { Link } from 'react-router-dom'

import Card from '../../common/Card'

const UserCard = props => {
  return (
    <Card
      avatar={props.avatar}
      cover="https://k60.kn3.net/taringa/0/C/B/5/A/D/9AA.png"
      status={props.status}
    >
      <div className="card-body">
        <h5 className="card-title">
          {props.firstname} {props.lastname}
        </h5>

        <Link to={`/u/${props.username}`}>
          <h6 className="card-subtitle">@{props.username}</h6>
        </Link>

        <p className="card-text mt-3 mb-4">{props.message}</p>

        <button className="btn btn-primary btn-block font-weight-bold mb-3">
          SEGUIR
        </button>

        <p className="text-muted small mb-0">
          Siguiendo a este usuario podrás ver sus publicaciones en tu página de
          inicio
        </p>
      </div>
    </Card>
  )
}

export default UserCard
