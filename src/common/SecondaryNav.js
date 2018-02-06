import React from 'react'
import { NavLink } from 'react-router-dom'

import './SecondaryNav.css'

const SecondaryNav = props => {
  return (
    <div className="SecondaryNav bg-light mb-4 border-bottom">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <ul className="nav">
              <li className="nav-item">
                <button className="btn btn-toggler">
                  <i className="ta-items-big" />
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-toggler">
                  <i className="ta-items-medium" />
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-toggler">
                  <i className="ta-items-small" />
                </button>
              </li>
              <li className="nav-item SecondaryNav-divider" />
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link SecondaryNav-item"
                  exact
                  to="/"
                >
                  Destacados
                </NavLink>
              </li>

              <li className="nav-item" style={{ minWidth: 104 }}>
                <NavLink
                  activeClassName="active"
                  className="nav-link SecondaryNav-item"
                  to="/recents"
                >
                  Recientes
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link SecondaryNav-item"
                  to="/tops"
                >
                  Tops
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-2 text-right align-self-center">
            <button className="btn btn-success btn-sm btn-create-post">
              Crear Post
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondaryNav
