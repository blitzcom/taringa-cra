import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import './Nav.css'
import SearchInput from '../search/components/SearchInput'

const Nav = props => {
  const isActive = (match, { pathname }) => {
    return pathname === '/' || pathname === '/recents'
  }

  return (
    <div className="navbar navbar-expand navbar-dark Nav">
      <div className="container">
        <Link className="navbar-brand font-weight-bold" to="/">
          TARINGA!
        </Link>

        <div className="collapse navbar-collapse">
          <div className="form-inline d-none d-md-block ml-md-4">
            <SearchInput />
          </div>

          <div className="navbar-nav ml-auto ml-md-4">
            <NavLink
              activeClassName="active"
              className="nav-item nav-link font-weight-bold"
              isActive={isActive}
              to="/"
            >
              MI T!
            </NavLink>

            <NavLink
              activeClassName="active"
              className="nav-item nav-link font-weight-bold"
              to="/global"
            >
              GLOBAL
            </NavLink>

            <NavLink
              activeClassName="active"
              className="nav-item nav-link font-weight-bold"
              to="/channels"
            >
              CANALES
            </NavLink>
          </div>

          <div className="navbar-nav d-none">
            <a className="nav-item nav-link" href="/">
              Iniciar sesión
            </a>
            <a className="nav-item nav-link" href="/">
              Crear cuenta
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
