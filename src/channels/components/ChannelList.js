import _ from 'lodash'
import React from 'react'

import { ChannelCard } from './ChannelCard'

const ChannelList = ({ items, onRetry, placeholderCount, status }) => {
  const isFetching = status === 'fetching'
  const hasFailure = status === 'failure'
  const itemsLength = items.length

  const makePlaceholders = () => {
    const effectiveCount = itemsLength > 0 ? 1 : placeholderCount
    return _.times(effectiveCount, index => (
      <div key={index} className="col-6 mb-4">
        <ChannelCard />
      </div>
    ))
  }

  return (
    <div>
      {(!hasFailure || itemsLength > 0) && (
        <div className="row">
          {items.map(item => (
            <div key={item.id} className="col-6 mb-4">
              <ChannelCard channel={item} control={{ status: 'success' }} />
            </div>
          ))}

          {isFetching && makePlaceholders()}
        </div>
      )}

      {hasFailure && (
        <div className="row">
          <div className="col-12">
            <div className="my-4 text-center">
              <div className="my-3 text-danger">
                ¡Ratas! Parece que no estás conectado a internet. Refresca la
                página o pulsa el siguiente botón.
              </div>

              <button
                className="btn btn-outline-primary btn-sm"
                onClick={onRetry}
              >
                Volver a intentar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

ChannelList.defaultProps = {
  items: [],
  onRetry: () => {},
  placeholderCount: 6,
  status: 'fetching',
}

export default ChannelList
