import _ from 'lodash'
import React from 'react'

import { ITEM_BIG, ITEM_MEDIUM, ITEM_SMALL } from '../../settings/constants'
import Summary from './Summary'

const Summaries = ({ items, onRetry, placeholderCount, size, status }) => {
  const isFetching = status === 'fetching'
  const hasFailure = status === 'failure'
  const itemsLength = items.length

  const placeholdersByItemSize = () => {
    switch (size) {
      case ITEM_SMALL:
        return 19
      case ITEM_BIG:
        return 3
      case ITEM_MEDIUM:
      default:
        return 9
    }
  }

  const makePlaceholders = () => {
    const effectiveCount =
      itemsLength > 0 ? 1 : placeholderCount || placeholdersByItemSize()

    return _.times(effectiveCount, index => (
      <Summary key={index} isPlaceholder size={size} />
    ))
  }

  return (
    <div className="Summaries">
      {(!hasFailure || itemsLength > 0) && (
        <div className="card">
          <ul className="list-group list-group-flush">
            {items.map(item => <Summary {...item} key={item.id} size={size} />)}

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
  items: [],
  onRetry: () => {},
  size: ITEM_MEDIUM,
  status: 'success',
}

export default Summaries
