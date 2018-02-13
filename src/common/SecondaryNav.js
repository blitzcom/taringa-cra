import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'
import { connect } from 'react-redux'
import classNames from 'classnames'

import './SecondaryNav.css'
import { ITEM_BIG, ITEM_MEDIUM, ITEM_SMALL } from '../settings/constants'
import * as actions from '../settings/actions'
import { clearTail } from '../summaries/actions'

export const SecondaryNav = ({
  changeItemSize,
  clearTail,
  itemSize,
  location,
}) => {
  const bigButtonClass = classNames('btn px-1 py-0 btn-light', {
    active: itemSize === ITEM_BIG,
  })
  const mediumButtonClass = classNames('btn px-1 py-0 btn-light', {
    active: itemSize === ITEM_MEDIUM,
  })
  const smallButtonClass = classNames('btn px-1 py-0 btn-light', {
    active: itemSize === ITEM_SMALL,
  })

  const goTop = e => {
    const pathname = e.currentTarget.getAttribute('href')

    if (pathname === location.pathname) {
      scroll.scrollToTop({ duration: 500 })
    } else {
      clearTail(location.pathname)
      window.scrollTo(0, 0)
    }
  }

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
                  <NavLink
                    activeClassName="active"
                    className="nav-item nav-link"
                    exact
                    onClick={e => goTop(e, 'trending')}
                    to="/"
                  >
                    Destacados
                  </NavLink>

                  <NavLink
                    activeClassName="active"
                    className="nav-item nav-link"
                    onClick={e => goTop(e, 'recents')}
                    to="/recents"
                  >
                    Recientes
                  </NavLink>

                  <NavLink
                    activeClassName="active"
                    className="nav-item nav-link"
                    onClick={e => goTop(e, 'tops')}
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

const mapStateToProps = state => ({
  itemSize: state.settings.itemSize,
})

const mapDispatchToProps = dispatch => ({
  changeItemSize: size => dispatch(actions.changeItemSize(size)),
  clearTail: pathname => dispatch(clearTail(pathname)),
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SecondaryNav)
)
