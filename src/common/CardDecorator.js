import React from 'react'
import classNames from 'classnames'

import './CardDecorator.css'

const Card = ({ avatar, children, className, cover, placeholder, ...rest }) => {
  if (placeholder) {
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
      {avatar && (
        <img src={avatar} className="Card-avatar rounded" alt="Avatar" />
      )}
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
  placeholder: true,
}

export default Card
