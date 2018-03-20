import React from 'react'
import { connect } from 'react-redux'

import Tab from './Tab'
import Summary from '../../summaries/components/SummaryContainer'

const StoriesTab = ({ items, ...rest }) => {
  return (
    <Tab className="list-group list-group-flush" {...rest}>
      {items.map(id => <Summary key={id} id={id} />)}
    </Tab>
  )
}

const mapStateToProps = state => {
  return state.search.stories
}

export default connect(mapStateToProps)(StoriesTab)
