import React from 'react'

import './Comments.css'
import Comment from './Comment'

const Comments = ({ items }) => {
  return (
    <div className="Comments">{items.map(i => <Comment key={i} id={i} />)}</div>
  )
}

Comments.defaultProps = {
  items: [],
}

export default Comments
