import React from 'react'
import { NavLink } from 'react-router-dom'

const Filter = ({ displayName, exact, pathname }) => {
  return (
    <NavLink
      activeClassName="active"
      className="nav-item nav-link"
      exact={exact}
      to={{
        pathname: pathname,
        state: { clear: true },
      }}
    >
      {displayName}
    </NavLink>
  )
}

Filter.defaultProps = {
  displayName: 'Nav Link',
  exact: false,
  pathname: '/navlink',
}

export default Filter
