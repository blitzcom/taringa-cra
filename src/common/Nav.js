import React from 'react'
import { Link } from 'react-router-dom'

import './Nav.css'

const Nav = props => (
  <div className="navbar navbar-dark Nav">
    <div className="container">
      <Link className="navbar-brand font-weight-bold" to="/">
        TARINGA!
      </Link>
    </div>
  </div>
)

export default Nav
