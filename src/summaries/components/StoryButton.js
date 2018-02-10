import React from 'react'

import { Link } from 'react-router-dom'
import './StoryButton.css'

const StoryButton = ({
  className,
  count,
  icon,
  isLink,
  wrapperStyle,
  ...props,
}) => {
  const Component = isLink ? Link : 'button'

  return (
    <span className="StoryButton" style={wrapperStyle}>
      <Component
        {...props}
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
