import React from 'react'
import classNames from 'classnames'

import './Stat.css'

const Stat = ({ className, count, label, plural }) => {
  const classes = classNames('Stat', className)

  return (
    <div className={classes}>
      <div className="Stat-count">{count.humanize()}</div>
      <div className="Stat-label">{count.pluralize(label, plural, true)}</div>
    </div>
  )
}

Stat.defaultProps = {
  plural: null,
}

export default Stat
