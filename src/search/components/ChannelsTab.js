import React from 'react'

import Tab from './Tab'
import ChannelCard from '../../channels/components/ChannelCardContainer'

const ChannelsTab = () => {
  return (
    <Tab className="card-body row" id="channels">
      {items =>
        items.map(id => (
          <div className="col-12 col-md-6 mb-4" key={id}>
            <ChannelCard id={id} />
          </div>
        ))
      }
    </Tab>
  )
}

export default ChannelsTab
