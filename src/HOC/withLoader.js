import React, { Fragment } from 'react'

import Loader from '../common/Loader'

const withLoader = (className, size) => BaseComponent => {
  const LoaderHOC = props => {
    const { items, totalCount, status } = props
    const showLoader =
      status === 'fetching' ||
      (items.length < totalCount && status !== 'failure')

    return (
      <Fragment>
        <BaseComponent {...props} />
        {showLoader && <Loader className={className} size={size} />}
      </Fragment>
    )
  }

  LoaderHOC.defaultProps = {
    items: [],
    status: 'success',
    totalCount: 0,
  }

  return LoaderHOC
}

export default withLoader
