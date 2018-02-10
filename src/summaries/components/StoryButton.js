import React from 'react'

import './StoryButton.css'

const StoryButton = ({ className, wrapperStyle, count, icon, ...props }) => {
  return (
    <span className="StoryButton" style={wrapperStyle}>
      <button
        {...props}
        className={['btn btn-story', className].join(' ')}
      >
        <i className={icon} />
        {count !== 0 && count}
      </button>
    </span>
  )
}

StoryButton.defaultProps = {
  count: 0,
  icon: 'fa fa-question',
}

export default StoryButton
