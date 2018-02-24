import React from 'react'
import { Link } from 'react-router-dom'

import Card from '../../common/Card'

const Channel = props => {
  return (
    <div className="col-6 mb-4">
      <Card status="success" avatar={props.thumbnail} cover={props.background}>
        <div className="card-body">
          <Link to={`/c/${props.name}`} onClick={() => window.scrollTo(0, 0)}>
            <h5 className="card-title">{props.title}</h5>
          </Link>

          {props.description !== props.title && (
            <p className="card-text mt-3 mb-4">{props.description}</p>
          )}
        </div>
      </Card>
    </div>
  )
}

export default Channel
