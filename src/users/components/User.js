import React from 'react'

import Feeding from '../../summaries/components/Feeding'
import Filterable from '../../filters/components/Filterable'
import UserCard from './UserCard'

const Feed = ({ match }) => {
  const username = match.params.username

  const filters = {
    hot: {
      displayName: 'Destacados',
      exact: true,
      id: 'hot',
      pathname: `/u/${username}`,
      url: `/user/${username}/feed`,
    },
    recents: {
      displayName: 'Recientes',
      exact: false,
      id: 'recents',
      pathname: `/u/${username}/recents`,
      url: `/user/${username}/feed`,
    },
    tops: {
      displayName: 'Tops',
      exact: false,
      id: 'tops',
      pathname: `/u/${username}/tops`,
      url: `/user/${username}/tops/week`,
    },
  }

  const filter = match.params.filter || 'hot'
  const url = filters[filter].url

  return (
    <div className="row">
      <Filterable filters={filters} />

      <div className="col-8">
        <Feeding feedId={username} filter={filter} url={url} />
      </div>

      <div className="col-4">
        <UserCard id={username} />
      </div>
    </div>
  )
}

export default Feed
