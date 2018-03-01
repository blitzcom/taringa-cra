import React from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

const Filters = ({ className, dispatch, items, ...rest }) => {
  const classes = classNames(className, 'navbar-nav mr-auto')

  return (
    <div className={classes} {...rest}>
      {items.map(filter => (
        <NavLink
          activeClassName="active"
          className="nav-item nav-link"
          exact={filter.exact}
          key={filter.id}
          to={{
            pathname: filter.pathname,
            state: { clear: true },
          }}
        >
          {filter.displayName}
        </NavLink>
      ))}
    </div>
  )
}

Filters.defaultProps = {
  items: [],
}

export default Filters
