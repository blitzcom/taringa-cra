import React from 'react'

import './SecondaryNav.css'
import ScoringFilters from '../filters/components/ScoringFilters'
import SizeList from '../settings/components/SizeList'

export const SecondaryNav = () => {
  return (
    <div className="SecondaryNav bg-light border-bottom">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <nav className="navbar navbar-light navbar-expand-lg p-0">
              <div className="collapse navbar-collapse">
                <SizeList />
                <span className="navbar-text divider" />
                <ScoringFilters />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondaryNav
