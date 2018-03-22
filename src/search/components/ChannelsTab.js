import React from 'react'
import { connect } from 'react-redux'

import Tab from './Tab'
import ChannelCard from '../../channels/components/ChannelCardContainer'

const ChannelsTab = ({ items, ...rest }) => {
  return (
    <Tab className="card-body row" {...rest}>
      {items.map(id => (
        <div className="col-12 col-md-6 mb-4" key={id}>
          <ChannelCard id={id} />
        </div>
      ))}
    </Tab>
  )
}

const mapStateToProps = state => {
  return state.search.channels
}

export default connect(mapStateToProps)(ChannelsTab)
