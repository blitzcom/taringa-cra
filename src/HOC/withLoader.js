import React, { Fragment } from 'react'

import Loader from '../common/Loader'

const withLoader = (className, size) => BaseComponent => props => {
  return (
    <Fragment>
      <BaseComponent {...props} />
      {props.status === 'fetching' && (
        <Loader className={className} size={size} />
      )}
    </Fragment>
  )
}

export default withLoader
