import React from 'react'

import './SecondaryNav.css'

const SecondaryNav = props => {
  return (
    <div className="SecondaryNav bg-light mb-4 border-bottom">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <ul className="nav">
              <li className="nav-item">
                <a href="/" className="nav-link text-secondary">
                  Destacados
                </a>
              </li>

              <li className="nav-item">
                <a href="/" className="nav-link text-secondary">
                  Recientes
                </a>
              </li>

              <li className="nav-item">
                <a href="/" className="nav-link text-secondary">
                  Tops
                </a>
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
