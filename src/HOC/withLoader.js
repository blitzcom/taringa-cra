import React, { Fragment } from 'react'

import Loader from '../common/Loader'

const withLoader = (
  getShowLoader = () => false,
  className,
  size
) => BaseComponent => {
  const LoaderHOC = props => {
    const showLoader = getShowLoader(props)

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
