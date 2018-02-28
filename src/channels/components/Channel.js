import React, { Component } from 'react'

import withFilter from '../../HOC/Filterable'
import FeedRoute from '../../feed/components/FeedRoute'
import ChannelCard from './ChannelCard'

class Channel extends Component {
  render() {
    const { channel } = this.props.match.params

    return (
      <div className="row">
        <div className="col-8">
          <FeedRoute
            exact
            id={`${channel}.hot`}
            path={`/c/${channel}`}
            url={`/c/${channel}/feed`}
          />
          <FeedRoute
            id={`${channel}.recents`}
            path={`/c/${channel}/recents`}
            url={`/c/${channel}/feed`}
          />
          <FeedRoute
            id={`${channel}.tops`}
            path={`/c/${channel}/tops`}
            url={`/c/${channel}/tops/week`}
          />
        </div>
        <div className="col-4">
          <ChannelCard />
        </div>
      </div>
    )
  }
}

const mapFilters = props => {
  const channel = props.match.params.channel

  return {
    hot: {
      displayName: 'Destacados',
      exact: true,
      id: 'hot',
      pathname: `/c/${channel}`,
    },
    recents: {
      displayName: 'Recientes',
      exact: false,
      id: 'recents',
      pathname: `/c/${channel}/recents`,
    },
    tops: {
      displayName: 'Tops',
      exact: false,
      id: 'tops',
      pathname: `/c/${channel}/tops`,
    },
  }
}

export default withFilter(mapFilters)(Channel)
