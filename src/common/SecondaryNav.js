import React from 'react'
import { NavLink } from 'react-router-dom'

import './SecondaryNav.css'

const SecondaryNav = props => {
  return (
    <div className="SecondaryNav bg-light mb-4 border-bottom">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <nav className="navbar navbar-light navbar-expand-lg p-0">
              <div className="collapse navbar-collapse">
                <div className="form-inline">
                  <button className="btn px-1 py-0 btn-light">
                    <i className="ta-items-big" />
                  </button>
                  <button className="btn px-1 py-0 btn-light">
                    <i className="ta-items-medium" />
                  </button>
                  <button className="btn px-1 py-0 btn-light">
                    <i className="fa fa-align-justify" />
                  </button>
                </div>

                <span className="navbar-text divider" />

                <div className="navbar-nav mr-auto">
                  <NavLink
                    activeClassName="active"
                    className="nav-item nav-link"
                    exact
                    to="/"
                  >
                    Destacados
                  </NavLink>

                  <NavLink
                    activeClassName="active"
                    className="nav-item nav-link"
                    to="/recents"
                  >
                    Recientes
                  </NavLink>

                  <NavLink
                    activeClassName="active"
                    className="nav-item nav-link"
                    to="/tops"
                  >
                    Tops
                  </NavLink>
                </div>

                <div className="form-inline">
                  <button className="btn btn-sm btn-outline-success">
                    Crear Post
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondaryNav
