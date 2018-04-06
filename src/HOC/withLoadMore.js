import React, { Fragment, PureComponent } from 'react'

import Loader from '../common/Loader'

const defaultFunc = () => false

const withLoadMore = (
  getShowLoader = defaultFunc,
  getHasMore = defaultFunc,
  getHasFailure = defaultFunc
) => BaseComponent => {
  return class withLoadMoreHOC extends PureComponent {
    static defaultProps = {
      onLoad: () => {},
    }

    constructor(props) {
      super(props)
      this.handleOnLoadMore = this.handleOnLoadMore.bind(this)
    }

    handleOnLoadMore(e) {
      if (e && e.preventDefault) {
        e.preventDefault()
      }

      this.props.onLoad()
    }

    render() {
      const showLoader = getShowLoader(this.props)
      const hasMore = getHasMore(this.props)
      const label = getHasFailure(this.props) ? 'Reintentar' : 'Ver más'

      return (
        <Fragment>
          <BaseComponent {...this.props} />
          {showLoader && <Loader />}
          {hasMore &&
            !showLoader && (
              <p className="text-center mb-0">
                <a href="/" onClick={this.handleOnLoadMore}>
                  {label}
                </a>
              </p>
            )}
        </Fragment>
      )
    }
  }
}

export default withLoadMore
