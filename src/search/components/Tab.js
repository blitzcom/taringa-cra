import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import './Tab.css'

export class Tab extends PureComponent {
  static defaultProps = {
    items: [],
    status: 'success',
  }

  render() {
    const { status, className, totalCount, items, children } = this.props

    const classes = className || 'card-body'
    const isFetching = status === 'fetching'
    const hasSuccess = status === 'success'
    const hasFailure = status === 'failure'
    const isInitial = hasSuccess && totalCount === undefined
    const hasResults = hasSuccess && totalCount !== undefined && totalCount > 0
    const isEmpty = hasSuccess && totalCount !== undefined && totalCount === 0

    if (hasResults) {
      return <div className={classes}>{children(items)}</div>
    }

    return (
      <div className="card-body">
        {isFetching && (
          <p className="Tab-slate">
            <i className="fa fa-circle-notch fa-spin mr-1" />
            Buscando...
          </p>
        )}

        {isInitial && (
          <p className="Tab-slate">Puedes buscar posts, usuarios o canales</p>
        )}

        {isEmpty && <p className="Tab-slate">No hay resultados</p>}

        {hasFailure && (
          <p className="Tab-slate text-danger">
            ¡Ratas! Intenta recargar la página
          </p>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state.searching[ownProps.id])
  return state.searching[ownProps.id] || {}
}

export default connect(mapStateToProps)(Tab)
