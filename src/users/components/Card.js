import React from 'react'

import './Card.css'

const Card = props => {
  if (props.status === 'fetching') {
    return (
      <div className="Card card">
        <div className="Card-animated-background">
          <div className="Card-ph-body"/>
          <div className="Card-ph-avatar rounded"/>
        </div>
      </div>
    )
  }

  return (
    <div className="Card card">
      <img
        src={props.avatar}
        className="Card-avatar rounded"
        alt="Avatar"
      />
      <img
        className="Card-cover card-img-top"
        src="https://k60.kn3.net/taringa/0/C/B/5/A/D/9AA.png"
        alt="Cover"
      />
      <div className="card-body">
        <h5 className="card-title">{props.firstname} {props.lastname}</h5>
        <h6 className="card-subtitle">@{props.username}</h6>
        <p className="card-text mt-3 mb-4">{props.message}</p>
        <button
          className="btn btn-primary btn-block font-weight-bold mb-3"
        >
          SEGUIR
        </button>
        <p className="text-muted small mb-0">
          Siguiendo a este usuario podrás ver sus publicaciones en tu página de inicio
        </p>
      </div>
    </div>
  )
}

export default Card
