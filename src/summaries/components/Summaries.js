import React from 'react'
import classNames from 'classnames'

import { ITEM_BIG, ITEM_MEDIUM, ITEM_SMALL } from '../../settings/constants'
import Summary from './SummaryContainer'

const Summaries = ({ items, onRetry, size, status }) => {
  const classes = classNames('Summaries', {
    'item-big': size === ITEM_BIG,
    'item-medium': size === ITEM_MEDIUM,
    'item-small': size === ITEM_SMALL,
  })

  if (items.length > 0) {
    return (
      <div className={classes}>
        <div className="card">
          <ul className="list-group list-group-flush">
            {items.map(id => <Summary key={id} id={id} />)}
          </ul>
        </div>
      </div>
    )
  }

  return null
}

Summaries.defaultProps = {
  items: [],
  onRetry: () => {},
  size: ITEM_MEDIUM,
  status: 'success',
}

export default Summaries
