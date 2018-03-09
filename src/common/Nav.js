import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

import './Nav.css'
import SearchInput from '../search/components/SearchInput'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.toggleCollapse = this.toggleCollapse.bind(this)
  }

  componentDidMount() {
    this.$content = window.$(this.content)
  }

  toggleCollapse() {
    this.$content.collapse('toggle')
  }

  render() {
    const isActive = (match, { pathname }) => {
      return pathname === '/' || pathname === '/recents'
    }

    return (
      <div className="navbar navbar-expand-md navbar-dark Nav">
        <div className="container">
          <Link className="navbar-brand font-weight-bold" to="/">
            TARINGA!
          </Link>

          <button
            aria-expanded="false"
            className="navbar-toggler"
            onClick={this.toggleCollapse}
            type="button"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="collapse navbar-collapse"
            ref={e => (this.content = e)}
          >
            <div className="form-inline mt-3 mt-md-0 mb-1 mb-md-0">
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
}

export default Nav
