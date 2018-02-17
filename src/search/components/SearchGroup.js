import React from 'react'

const SearchGroup = ({ title, matches, children, ...props }) => {
  if (!matches) {
    return null
  }

  return (
    <div {...props}>
      <h6 className="text-secondary">
        {title} <small>({matches || 0} resultados)</small>
      </h6>
      {children}
    </div>
  )
}

export default SearchGroup
