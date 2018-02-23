import React, { Component } from 'react'

import Feed from './Feed'
import ChannelCard from './ChannelCard'

class Channel extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-8">
          <Feed />
        </div>
        <div className="col-4">
          <ChannelCard />
        </div>
      </div>
    )
  }
}

export default Channel
