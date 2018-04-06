import React from 'react'

const RepliesToggler = ({ isVisible, totalCount, onToggleVisibility }) => {
  if (totalCount === 0) {
    return null
  }

  return (
    <button
      className="btn btn-link text-dark Commentable-replies-toggler mb-2"
      onClick={onToggleVisibility}
    >
      {isVisible ? (
        <span>
          {`Ocultar ${totalCount.pluralize('respuesta', null, true)} `}
          <i className="fa fa-chevron-up" />
        </span>
      ) : (
        <span>
          {`Ver ${totalCount.pluralize('respuesta', null, totalCount === 1)} `}
          <i className="fa fa-chevron-down" />
        </span>
      )}
    </button>
  )
}

RepliesToggler.defaultProps = {
  isVisible: false,
  onToggleVisibility: () => {},
  totalCount: 0,
}

export default RepliesToggler
