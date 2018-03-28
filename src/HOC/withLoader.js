import React, { Fragment } from 'react'

import Loader from '../common/Loader'

const withLoader = () => BaseComponent => props => {
  return (
    <Fragment>
      <BaseComponent {...props} />
      {props.status === 'fetching' && <Loader />}
    </Fragment>
  )
}

export default withLoader
