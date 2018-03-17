import React, { PureComponent } from 'react'

import Replies from './RepliesContainer'
import Commentable from './Commentable'

class Comment extends PureComponent {
  render() {
    const { replies } = this.props

    return (
      <Commentable {...this.props}>
        {replies && <Replies id={replies} />}
      </Commentable>
    )
  }
}

export default Comment
