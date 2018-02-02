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
                <NavLink
                  activeClassName="SecondaryNav-active-item"
                  className="nav-link text-secondary"
                  exact
                  to="/"
                >
                  Destacados
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  activeClassName="SecondaryNav-active-item"
                  className="nav-link text-secondary"
                  to="/recents"
                >
                  Recientes
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  activeClassName="SecondaryNav-active-item"
                  className="nav-link text-secondary"
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
