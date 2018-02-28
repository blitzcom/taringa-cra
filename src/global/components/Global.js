import React from 'react'

import withFilter from '../../HOC/Filterable'
import FeedRoute from '../../feed/components/FeedRoute'

const Global = props => {
  return (
    <div className="row">
      <div className="col-8">
        <FeedRoute exact id="global.hot" path="/global" url="/feed/global" />
        <FeedRoute
          id="global.recents"
          path="/global/recents"
          url="/feed/global?sort=recent"
        />
        <FeedRoute
          id="global.tops"
          path="/global/tops"
          url="/feed/global/tops/week"
        />
      </div>
    </div>
  )
}

const mapFilters = props => {
  return {
    hot: {
      displayName: 'Destacados',
      exact: true,
      id: 'hot',
      pathname: '/global',
    },
    recents: {
      displayName: 'Recientes',
      exact: false,
      id: 'recents',
      pathname: '/global/recents',
    },
    tops: {
      displayName: 'Tops',
      exact: false,
      id: 'tops',
      pathname: '/global/tops',
    },
  }
}

export default withFilter(mapFilters)(Global)
