import React from 'react'

import Ad from '../../ads/components/Ad'
import withFilter from '../../HOC/Filterable'
import FeedRoute from '../../feed/components/FeedRoute'

export const Home = () => {
  return (
    <div className="row">
      <div className="col-8">
        <FeedRoute exact id="mi.hot" path="/" url="/feed" />
        <FeedRoute id="mi.recents" path="/recents" url="/feed?sort=recent" />
      </div>

      <div className="col-4">
        <Ad />
      </div>
    </div>
  )
}

const filters = {
  hot: {
    displayName: 'Destacados',
    exact: true,
    id: 'hot',
    pathname: '/',
  },
  recents: {
    displayName: 'Recientes',
    exact: false,
    id: 'recents',
    pathname: '/recents',
  },
}

export default withFilter(filters)(Home)
