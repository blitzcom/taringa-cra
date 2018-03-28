import React, { Fragment } from 'react'

import Loader from '../common/Loader'

const withLoader = () => BaseComponent => ({ status, ...rest }) => {
  return (
    <Fragment>
      <BaseComponent {...rest} />
      {status === 'fetching' && <Loader />}
    </Fragment>
  )
}

export default withLoader
