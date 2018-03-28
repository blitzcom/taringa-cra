import React from 'react'
import classNames from 'classnames'
import LazyLoad from 'react-lazyload'

import './CardDecorator.css'

import history from '../history'

const CardDecorator = ({
  avatar,
  children,
  className,
  cover,
  link,
  placeholder,
  to,
  ...rest
}) => {
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

  const handleOnClick = () => {
    if (link && to) {
      history.push(to)
    }
  }

  const classes = classNames('Card card', className, {
    link: link && true,
  })

  return (
    <div {...rest} onClick={handleOnClick} className={classes}>
      {avatar && (
        <LazyLoad placeholder={<div className="Card-avatar" />} debounce once>
          <img src={avatar} className="Card-avatar rounded" alt="Avatar" />
        </LazyLoad>
      )}

      <LazyLoad height={100} debounce once>
        <img
          alt="Cover"
          className="Card-cover card-img-top"
          src={cover || 'https://k60.kn3.net/taringa/0/C/B/5/A/D/9AA.png'}
        />
      </LazyLoad>
      {children}
    </div>
  )
}

CardDecorator.defaultProps = {
  placeholder: false,
}

export default CardDecorator
