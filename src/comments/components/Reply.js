import React, { PureComponent } from 'react'

import Commentable from './Commentable'

class Reply extends PureComponent {
  static defaultProps = Commentable.defaultProps

  render() {
    return <Commentable {...this.props} />
  }
}

export default Reply
