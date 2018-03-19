import _ from 'lodash'
import React from 'react'
import classNames from 'classnames'

import { ITEM_BIG, ITEM_MEDIUM, ITEM_SMALL } from '../../settings/constants'
import Summary from './SummaryContainer'

const placeholdersByItemSize = {
  [ITEM_BIG]: 3,
  [ITEM_MEDIUM]: 9,
  [ITEM_SMALL]: 19,
}

const Summaries = ({ ids, onRetry, size, status }) => {
  const isFetching = status === 'fetching'
  const hasFailure = status === 'failure'
  const idsLength = ids.length

  const makePlaceholders = () => {
    const effectiveCount = idsLength > 0 ? 1 : placeholdersByItemSize[size]

    return _.times(effectiveCount, index => (
      <Summary key={index} isPlaceholder size={size} />
    ))
  }

  const classes = classNames('Summaries', {
    'item-big': size === ITEM_BIG,
    'item-medium': size === ITEM_MEDIUM,
    'item-small': size === ITEM_SMALL,
  })

  return (
    <div className={classes}>
      {(!hasFailure || idsLength > 0) && (
        <div className="card">
          <ul className="list-group list-group-flush">
            {ids.map(id => <Summary key={id} id={id} />)}

            {isFetching && makePlaceholders()}
          </ul>
        </div>
      )}

      {hasFailure && (
        <div className="my-4 text-center">
          <div className="my-3 text-danger">
            ¡Ratas! Parece que no estás conectado a internet. Refresca la página
            o pulsa el siguiente botón.
          </div>

          <button className="btn btn-outline-primary btn-sm" onClick={onRetry}>
            Volver a intentar
          </button>
        </div>
      )}
    </div>
  )
}

Summaries.defaultProps = {
  ids: [],
  onRetry: () => {},
  size: ITEM_MEDIUM,
  status: 'success',
}

export default Summaries
