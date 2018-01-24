import React from 'react'
import classNames from 'classnames'

const ToggleAction = ({
  activeIcon,
  children,
  className,
  inactiveIcon,
  isToggled,
  ...props
}) => {
  const icon = isToggled ? activeIcon : inactiveIcon
  const iconClass = classNames('fa', `fa-${icon}`)
  const buttonClass = classNames('btn btn-action', className, {
    active: isToggled,
  })

  return (
    <button {...props} className={buttonClass}>
      {icon && <i className={iconClass} />}
      {children}
    </button>
  )
}

ToggleAction.defaultProps = {
  activeIcon: '',
  inactiveIcon: '',
  isToggled: false,
}

export default ToggleAction
