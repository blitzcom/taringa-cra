import React from 'react'
import classNames from 'classnames'

import Filter from './Filter'

const Filters = ({ className, items }) => {
  const classes = classNames(className, 'navbar-nav mr-auto')

  return (
    <div className={classes}>
      {items.map(filter => <Filter key={filter.id} {...filter} />)}
    </div>
  )
}

Filters.defaultProps = {
  items: [],
}

export default Filters
