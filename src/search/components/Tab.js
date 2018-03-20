import React, { PureComponent } from 'react'

import './Tab.css'

class Tab extends PureComponent {
  static defaultProps = {
    status: 'success',
    totalCount: null,
  }

  render() {
    const { status, className, totalCount, children } = this.props

    const classes = className || 'card-body'
    const isFetching = status === 'fetching'
    const hasSuccess = status === 'success'
    const hasFailure = status === 'failure'
    const isInitial = hasSuccess && totalCount === null
    const hasResults = hasSuccess && totalCount !== null && totalCount > 0
    const isEmpty = hasSuccess && totalCount !== null && totalCount === 0

    if (hasResults) {
      return <div className={classes}>{children}</div>
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

export default Tab
