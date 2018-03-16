import React, { PureComponent } from 'react'

import Replies from './RepliesContainer'
import Commentable from './Commentable'

class Comment extends PureComponent {
  static defaultProps = Commentable.defaultProps

  render() {
    const { comment } = this.props

    return (
      <Commentable {...this.props}>
        {comment.replies && <Replies id={comment.replies} />}
      </Commentable>
    )
  }
}

export default Comment
