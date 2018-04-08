import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'

import ChannelCard from '../../channels/components/ChannelCardContainer'
import { searchTrigger } from '../actions'
import withSearch from './withSearch'

export const ChannelsTab = ({ items }) => {
  return (
    <div className="card-body row py-0">
      {items.map(id => (
        <div className="col-12 col-md-6 mt-4" key={id}>
          <ChannelCard id={id} />
        </div>
      ))}
    </div>
  )
}

ChannelsTab.defaultProps = {
  items: [],
}

const enhance = compose(
  connect(
    state => state.searching.channels || {},
    dispatch => ({
      onLoad: () => dispatch(searchTrigger('channels')),
    })
  ),
  withSearch()
)

export default enhance(ChannelsTab)
