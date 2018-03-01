import React from 'react'

import history from '../../history'

const Story = ({ slug, children }) => {
  const handleOnClick = () => {
    history.push(`/story/${slug}`)
  }

  return (
    <div
      className="list-group-item list-group-item-action p-2 Summary"
      onClick={handleOnClick}
    >
      {children}
    </div>
  )
}

export default Story
