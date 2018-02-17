import React from 'react'

const SearchGroup = ({ hide, title, children, ...props }) => {
  if (hide) {
    return null
  }

  return (
    <div {...props}>
      <h6 className="text-secondary">{title}</h6>
      {children}
    </div>
  )
}

export default SearchGroup
