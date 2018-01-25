import React from 'react'
import classNames from 'classnames'

import './Alert.css'

const Alert = ({ type, className, ...props }) => {
  const wrapperClass = classNames('alert', className, {
    [`alert-${type}`]: true,
  })

  return (
    <div className={wrapperClass} {...props}>
      {props.icon && <i className="fa fa-check Alert-icon" />}
      {props.children}
    </div>
  )
}

export default Alert
