import React from 'react'
import { connect } from 'react-redux'

import Comment from './Comment'
import { commentsSelector, commentControlSelector } from '../selectors'

const Comments = ({ comments, commentsControl }) => {
  if (!commentsControl) {
    return null
  }

  if (commentsControl.status === 'fetching') {
    return (
      <div className="mt-4 text-center">
        <i className="fa fa-spinner fa-spin"/>
      </div>
    )
  }

  return (
    <div className="Comments mt-4">
      <div className="card">
        <div className="card-body">
          {comments.map(i => <Comment key={i.id} {...i} />)}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  comments: commentsSelector(state, props),
  commentsControl: commentControlSelector(state, props),
})

export default connect(mapStateToProps)(Comments)
