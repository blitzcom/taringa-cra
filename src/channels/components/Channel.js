import React, { Component } from 'react'

import { Summaries } from '../../summaries/components/Summaries'

class Channel extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-8">
          <Summaries />
        </div>
        <div className="col-4">channel details goes here</div>
      </div>
    )
  }
}

export default Channel
