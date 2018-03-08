import React from 'react'

import Ad from '../../ads/components/Ad'
import Filterable from '../../filters/components/Filterable'
import ChannelListContainer from './ChannelListContainer'

const Channels = ({ match }) => {
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

  const filter = match.params.filter || 'hot'
  const url = filters[filter].url

  return (
    <div className="row">
      <Filterable filters={filters} />

      <div className="col-12 col-lg-8">
        <ChannelListContainer url={url} filter={filter} />
      </div>

      <div className="col-4 order-first order-lg-last d-none d-lg-block">
        <Ad />
      </div>
    </div>
  )
}

Channels.defaultProps = {
  match: { params: {} },
}

export default Channels
