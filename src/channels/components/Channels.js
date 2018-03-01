import React from 'react'

import Ad from '../../ads/components/Ad'
import Filterable from '../../filters/components/Filterable'

const Channels = () => {
  const filters = {
    hot: {
      displayName: 'Destacados',
      exact: true,
      id: 'hot',
      pathname: '/channels',
      url: '/c/list/hot',
    },
    recents: {
      displayName: 'Recientes',
      exact: false,
      id: 'recents',
      pathname: '/channels/recents',
      url: '/c/list/recent',
    },
    populars: {
      displayName: 'Populares',
      exact: false,
      id: 'tops',
      pathname: '/channels/populars',
      url: '/c/list/popular',
    },
  }

  return (
    <div className="row">
      <Filterable filters={filters} />

      <div className="col-8" />

      <div className="col-4">
        <Ad />
      </div>
    </div>
  )
}

export default Channels
