import React from 'react'
import { Link } from 'react-router-dom'

import CardDecorator from '../../common/CardDecorator'

const Channel = props => {
  return (
    <div className="col-6 mb-4">
      <CardDecorator
        avatar={props.thumbnail}
        cover={props.background}
        placeholder={false}
      >
        <div className="card-body">
          <Link to={`/c/${props.name}`} onClick={() => window.scrollTo(0, 0)}>
            <h5 className="card-title">{props.title}</h5>
          </Link>

          {props.description !== props.title && (
            <p className="card-text mt-3 mb-4">{props.description}</p>
          )}
        </div>
      </CardDecorator>
    </div>
  )
}

export default Channel
