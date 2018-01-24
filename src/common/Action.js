import React from 'react'
import classNames from 'classnames'

const Action = ({ icon, className, children, ...props }) => (
  <button {...props} className={classNames('btn btn-action', className)}>
    {icon && <i className={`fa fa-${icon}`} />}
    {children}
  </button>
)

export default Action
