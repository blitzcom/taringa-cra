import React from 'react'

const SearchGroup = ({ className, ...props }) => {
  return (
    <div className={className}>
      <h6 className="text-secondary">{props.title}</h6>

      {props.wrapper && <div className="row">{props.children}</div>}

      {!props.wrapper && props.children}
    </div>
  )
}

export default SearchGroup
