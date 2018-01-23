import React from 'react'
import classNames from 'classnames'

const ToggleAction = props => {
  const icon = props.isActive ? props.activeIcon : props.inactiveIcon
  const iconClass = classNames('fa', `fa-${icon}`)
  const buttonClass = classNames('btn btn-action', props.className, {
    active: props.isActive,
  })

  return (
    <button
      {...props}
      className={buttonClass}
    >
      <i className={iconClass}/>
      {props.children}
    </button>
  )
}

ToggleAction.defaultProps = {
  isActive: false
}

export default ToggleAction
