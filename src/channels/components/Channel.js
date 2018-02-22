import React, { Component } from 'react'

import Feed from './Feed'

class Channel extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-8">
          <Feed />
        </div>
        <div className="col-4">channel details goes here</div>
      </div>
    )
  }
}

export default Channel
