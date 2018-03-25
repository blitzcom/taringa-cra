import React, { Fragment, PureComponent } from 'react'
import classNames from 'classnames'

import './Tab.css'

const withSearch = () => BaseComponent => {
  return class Tab extends PureComponent {
    static defaultProps = {
      items: [],
      onLoad: () => {},
    }

    constructor(props) {
      super(props)
      this.handleLoadMore = this.handleLoadMore.bind(this)
    }

    handleLoadMore() {
      this.props.onLoad()
    }

    render() {
      const { status, totalCount, ...rest } = this.props

      const isFetching = status === 'fetching'
      const hasSuccess = status === 'success'
      const hasFailure = status === 'failure'
      const isInitial = status === undefined && totalCount === undefined
      const hasResults = totalCount !== undefined && totalCount > 0
      const isEmpty = hasSuccess && totalCount !== undefined && totalCount === 0
      const hasMoreContent =
        hasSuccess && hasResults && this.props.items.length < totalCount

      const slateClass = classNames('card-body text-center', {
        'Tab-slate': !hasResults,
        'p-2': hasResults,
      })

      return (
        <Fragment>
          {hasResults && <BaseComponent {...rest} />}

          <div className={slateClass}>
            {hasMoreContent && (
              <button
                className="btn btn-link btn-sm text-dark"
                onClick={this.handleLoadMore}
              >
                Ver más
              </button>
            )}

            {isFetching && <i className="fa fa-circle-notch fa-spin" />}

            {isInitial && <span>Puedes buscar posts, usuarios o canales</span>}

            {isEmpty && <span>No hay resultados</span>}

            {hasFailure && (
              <Fragment>
                <span className="text-danger d-block">
                  ¡Ratas! Algo salío mal
                </span>

                <button
                  className="btn btn-outline-primary btn-sm mt-2"
                  onClick={this.handleLoadMore}
                >
                  Reintentar
                </button>
              </Fragment>
            )}
          </div>
        </Fragment>
      )
    }
  }
}

export default withSearch
