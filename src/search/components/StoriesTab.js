import React from 'react'

import Tab from './Tab'
import Summary from '../../summaries/components/SummaryContainer'

const StoriesTab = () => {
  return (
    <Tab className="list-group list-group-flush" id="stories">
      {items => items.map(id => <Summary key={id} id={id} />)}
    </Tab>
  )
}

export default StoriesTab
