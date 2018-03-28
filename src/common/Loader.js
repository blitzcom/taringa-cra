import React from 'react'
import classNames from 'classnames'

const Loader = ({ className, size }) => {
  const classes = classNames('text-center text-dark', className)
  const icon = classNames('fa fa-spinner fa-spin', size)

  return (
    <div className={classes}>
      <i className={icon} />
    </div>
  )
}

export default Loader
