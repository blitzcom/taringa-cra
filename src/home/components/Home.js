import React from 'react'

import Ad from '../../ads/components/Ad'
import Feed from '../../feed/components/Feed'
import Filterable from '../../filters/components/Filterable'

const filters = {
  hot: {
    displayName: 'Destacados',
    exact: true,
    id: 'hot',
    pathname: '/',
    url: '/feed',
  },
  recents: {
    displayName: 'Recientes',
    exact: false,
    id: 'recents',
    pathname: '/recents',
    url: '/feed?sort=recent',
  },
}

const Home = ({ match }) => {
  const filter = match.params.filter || 'hot'
  const url = filters[filter].url

  return (
    <div className="row">
      <Filterable filters={filters} />

      <div className="col-8">
        <Feed feedId="mi" filter={filter} url={url} />
      </div>

      <div className="col-4">
        <Ad />
      </div>
    </div>
  )
}

Home.defaultProps = {
  match: { params: {} },
}

export default Home
