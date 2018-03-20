import React from 'react'
import classNames from 'classnames'

const TabButton = ({ className, id, isActive, label, onClick, totalCount }) => {
  const handleOnClick = e => {
    if (e && e.preventDefault) {
      e.preventDefault()
    }

    onClick(id)
  }

  const classes = classNames('nav-item nav-link', className, {
    active: isActive,
  })

  return (
    <a className={classes} onClick={handleOnClick}>
      {label}
      {totalCount !== null && (
        <span className="small text-secondary ml-1">({totalCount})</span>
      )}
    </a>
  )
}

TabButton.defaultProps = {
  id: '#ID',
  isActive: false,
  label: '#LABEL',
  onClick: () => {},
  totalCount: null,
}

export default TabButton
