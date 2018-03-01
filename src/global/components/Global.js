import React from 'react'

import Ad from '../../ads/components/Ad'
import Feed from '../../feed/components/Feed'
import Filterable from '../../filters/components/Filterable'

const filters = {
  hot: {
    displayName: 'Destacados',
    exact: true,
    id: 'hot',
    pathname: '/global',
    url: '/feed/global',
  },
  recents: {
    displayName: 'Recientes',
    exact: false,
    id: 'recents',
    pathname: '/global/recents',
    url: '/feed/global?sort=recent',
  },
  tops: {
    displayName: 'Tops',
    exact: false,
    id: 'tops',
    pathname: '/global/tops',
    url: '/feed/global/tops/week',
  },
}

const Global = ({ match }) => {
  const filter = match.params.filter || 'hot'
  const url = filters[filter].url

  return (
    <div className="row">
      <Filterable filters={filters} />

      <div className="col-8">
        <Feed feedId="global" filter={filter} url={url} />
      </div>

      <div className="col-4">
        <Ad />
      </div>
    </div>
  )
}

Global.defaultProps = {
  match: { params: {} },
}

export default Global
