import React from 'react'

import Story from '../../stories/components/Story'

const Home = props => (
  <div className="row">
    <div className="col-9">
      {
        props.stories.map(i => <Story key={i.id} />)
      }
    </div>
    <div className="col-3">
      Aside
    </div>
  </div>
)

Home.defaultProps = {
  stories: []
}

export default Home
