import React from 'react'

import './Comments.css'
import Comment from './CommentContainer'

const Comments = ({ items }) => {
  if (items.length > 0) {
    return (
      <div className="Comments">
        {items.map(i => <Comment key={i} id={i} />)}
      </div>
    )
  }

  return null
}

Comments.defaultProps = {
  items: [],
}

export default Comments
