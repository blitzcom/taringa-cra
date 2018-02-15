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
      </div>
    </div>
  </div>
)

export default Nav
