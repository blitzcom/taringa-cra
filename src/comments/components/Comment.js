import React from 'react'

import Replies from './RepliesContainer'
import Commentable from './CommentableContainer'

const Comment = ({ id }) => {
  return (
    <div>
      <Commentable id={id} />
      {id && (
        <div className="Comment-replies">
          <Replies id={id} />
        </div>
      )}
    </div>
  )
}

export default Comment
