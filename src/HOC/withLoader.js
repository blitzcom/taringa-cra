import React, { Fragment } from 'react'

import Loader from '../common/Loader'

const withLoader = (className, size) => BaseComponent => {
  const LoaderHOC = props => {
    const { count, status } = props
    const showLoader =
      status === 'fetching' || (count !== 0 && status !== 'failure')

    return (
      <Fragment>
        <BaseComponent {...props} />
        {showLoader && <Loader className={className} size={size} />}
      </Fragment>
    )
  }

  LoaderHOC.defaultProps = {
    count: 0,
    items: [],
    status: 'success',
  }

  return LoaderHOC
}

export default withLoader
