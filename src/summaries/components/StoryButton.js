import React from 'react'
import classNames from 'classnames'

import { Link } from 'react-router-dom'
import './StoryButton.css'

const StoryButton = ({
  className,
  count,
  icon,
  isLink,
  wrapperStyle,
  ...props
}) => {
  const Component = isLink ? Link : 'button'
  const handleOnClick = e => e.stopPropagation()

  const classes = classNames('btn btn-story', className)

  return (
    <span className="StoryButton" style={wrapperStyle}>
      <Component className={classes} onClick={handleOnClick} {...props}>
        <i className={icon} />
        {count !== 0 && count}
      </Component>
    </span>
  )
}

StoryButton.defaultProps = {
  count: 0,
  icon: 'fa fa-question',
}

export default StoryButton
