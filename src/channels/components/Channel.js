import React from 'react'

import Feeding from '../../summaries/components/Feeding'
import Filterable from '../../filters/components/Filterable'
import ChannelCard from './ChannelCard'

const Channel = ({ match }) => {
  const channel = match.params.channel
  const filter = match.params.filter || 'hot'

  const filters = {
    hot: {
      displayName: 'Destacados',
      exact: true,
      id: 'hot',
      pathname: `/c/${channel}`,
      url: `/c/${channel}/feed`,
    },
    recents: {
      displayName: 'Recientes',
      exact: false,
      id: 'recents',
      pathname: `/c/${channel}/recents`,
      url: `/c/${channel}/feed`,
    },
    tops: {
      displayName: 'Tops',
      exact: false,
      id: 'tops',
      pathname: `/c/${channel}/tops`,
      url: `/c/${channel}/tops/week`,
    },
  }

  const url = filters[filter].url

  return (
    <div className="row">
      <Filterable filters={filters} />

      <div className="col-8">
        <Feeding feedId={channel} filter={filter} url={url} />
      </div>

      <div className="col-4">
        <ChannelCard />
      </div>
    </div>
  )
}

Channel.defaultProps = {
  match: { params: {} },
}

export default Channel
