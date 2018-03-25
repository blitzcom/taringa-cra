import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'

import Summary from '../../summaries/components/SummaryContainer'
import { searchTrigger } from '../actions'
import withSearch from './withSearch'

export const StoriesTab = ({ items }) => {
  return (
    <div className="list-group list-group-flush">
      {items.map(id => <Summary key={id} id={id} />)}
    </div>
  )
}

StoriesTab.defaultProps = {
  items: [],
}

const enhance = compose(
  connect(
    state => state.searching.stories || {},
    dispatch => ({
      onLoad: () => dispatch(searchTrigger('stories')),
    })
  ),
  withSearch()
)

export default enhance(StoriesTab)
