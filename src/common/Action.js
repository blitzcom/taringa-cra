import React from 'react'
import classNames from 'classnames'

const Action = ({ children, className, icon, ...rest }) => {
  const classes = classNames('btn btn-light btn-sm', className)
  const contentClasses = classNames({
    'ml-2': icon && true,
  })

  return (
    <button className={classes} {...rest}>
      {icon && <i className={icon} />}
      {children &&
        children !== '0' && <span className={contentClasses}>{children}</span>}
    </button>
  )
}

export default Action
