import React from 'react'
import classNames from 'classnames'

const Action = props => (
  <button
    {...props}
    className={classNames('btn btn-action', props.className)}
  >
    { props.icon && <i className={`fa fa-${props.icon}`}/> }
    {props.children}
  </button>
)

export default Action
