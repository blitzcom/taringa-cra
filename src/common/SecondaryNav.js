import _ from 'lodash'
import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import classNames from 'classnames'

import './SecondaryNav.css'
import { ITEM_BIG, ITEM_MEDIUM, ITEM_SMALL } from '../settings/constants'
import * as actions from '../settings/actions'

export const SecondaryNav = ({ changeItemSize, itemSize, filters }) => {
  const bigButtonClass = classNames('btn px-1 py-0 btn-light', {
    active: itemSize === ITEM_BIG,
  })
  const mediumButtonClass = classNames('btn px-1 py-0 btn-light', {
    active: itemSize === ITEM_MEDIUM,
  })
  const smallButtonClass = classNames('btn px-1 py-0 btn-light', {
    active: itemSize === ITEM_SMALL,
  })

  return (
    <div className="SecondaryNav bg-light border-bottom">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <nav className="navbar navbar-light navbar-expand-lg p-0">
              <div className="collapse navbar-collapse">
                <div className="form-inline">
                  <button
                    className={bigButtonClass}
                    onClick={() => changeItemSize(ITEM_BIG)}
                  >
                    <i className="ta-items-big" />
                  </button>

                  <button
                    className={mediumButtonClass}
                    onClick={() => changeItemSize(ITEM_MEDIUM)}
                  >
                    <i className="ta-items-medium" />
                  </button>

                  <button
                    className={smallButtonClass}
                    onClick={() => changeItemSize(ITEM_SMALL)}
                  >
                    <i className="fa fa-align-justify" />
                  </button>
                </div>

                <span className="navbar-text divider" />

                <div className="navbar-nav mr-auto">
                  {filters.map(f => (
                    <NavLink
                      key={f.id}
                      activeClassName="active"
                      className="nav-item nav-link"
                      exact={f.exact}
                      to={{
                        pathname: f.pathname,
                        state: { clear: true },
                      }}
                    >
                      {f.displayName}
                    </NavLink>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

SecondaryNav.defaultProps = {
  filters: [],
}

const mapStateToProps = state => ({
  filters: _.values(state.filters),
  itemSize: state.settings.itemSize,
})

const mapDispatchToProps = dispatch => ({
  changeItemSize: size => dispatch(actions.changeItemSize(size)),
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SecondaryNav)
)
