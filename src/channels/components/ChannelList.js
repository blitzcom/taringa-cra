import React from 'react'

import ChannelCard from './ChannelCardContainer'

const ChannelList = ({ items }) => {
  return (
    <div className="row">
      {items.map(id => (
        <div key={id} className="col-12 col-md-6 mb-4">
          <ChannelCard id={id} />
        </div>
      ))}
    </div>
  )
}

ChannelList.defaultProps = {
  items: [],
}

export default ChannelList
