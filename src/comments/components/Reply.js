import React, { PureComponent } from 'react'

import Commentable from './Commentable'

class Reply extends PureComponent {
  render() {
    return <Commentable {...this.props} />
  }
}

export default Reply
