import React from 'react'

import Feed from '../../feed/components/Feed'
import Filterable from '../../filters/components/Filterable'
import ChannelCard from './ChannelCardResource'

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

      <div className="col-12 col-lg-8">
        <Feed feedId={channel} filter={filter} url={url} />
      </div>

      <div className="col-12 col-lg-4 mb-4 mb-lg-0 order-first order-lg-last">
        <ChannelCard id={channel} />
      </div>
    </div>
  )
}

Channel.defaultProps = {
  match: { params: {} },
}

export default Channel
