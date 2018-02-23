import React from 'react'
import classNames from 'classnames'

import './Card.css'

const Card = ({ avatar, children, className, cover, status, ...rest }) => {
  if (status === 'fetching') {
    return (
      <div className="Card card">
        <div className="Card-animated-background">
          <div className="Card-ph-body" />
          <div className="Card-ph-avatar rounded" />
        </div>
      </div>
    )
  }

  return (
    <div {...rest} className={classNames('Card card', className)}>
      <img src={avatar} className="Card-avatar rounded" alt="Avatar" />
      <img
        alt="Cover"
        className="Card-cover card-img-top"
        src={cover || 'https://k60.kn3.net/taringa/0/C/B/5/A/D/9AA.png'}
      />
      {children}
    </div>
  )
}

Card.defaultProps = {
  status: 'fetching',
}

export default Card
