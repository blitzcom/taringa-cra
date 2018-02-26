import React from 'react'
import { Link } from 'react-router-dom'

import './Nav.css'
import SearchInput from '../search/components/SearchInput'

const Nav = props => (
  <div className="navbar navbar-expand-lg navbar-dark Nav">
    <div className="container">
      <Link className="navbar-brand font-weight-bold" to="/">
        TARINGA!
      </Link>

      <div className="collapse navbar-collapse">
        <div className="form-inline">
          <SearchInput />
        </div>

        <div className="navbar-nav ml-5 mr-auto">
          <a className="nav-item nav-link active font-weight-bold" href="/">
            MI T!
          </a>

          <a className="nav-item nav-link font-weight-bold" href="/">
            GLOBAL
          </a>

          <a className="nav-item nav-link font-weight-bold" href="/">
            CANALES
          </a>
        </div>

        <div className="navbar-nav">
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

export default Nav
