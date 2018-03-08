import React from 'react'

import './SecondaryNav.css'
import FiltersContainer from '../filters/components/FiltersContainer'
import SizeList from '../settings/components/SizeList'

export const SecondaryNav = () => {
  return (
    <div className="SecondaryNav bg-light border-bottom">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8">
            <nav className="navbar navbar-light navbar-expand p-0">
              <div className="collapse navbar-collapse">
                <SizeList />
                <span className="navbar-text divider mx-0 mx-lg-3" />
                <FiltersContainer />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondaryNav
