import React from 'react'

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

  return (
    <span className="StoryButton" style={wrapperStyle}>
      <Component
        {...props}
        onClick={handleOnClick}
        className={['btn btn-story', className].join(' ')}
      >
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
