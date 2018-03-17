import { connect } from 'react-redux'

import Comment from './Comment'
import { makeCommentSelector, makeOwnerSelector } from '../selectors'

const makeMapStateToProps = () => {
  const commentSelector = makeCommentSelector()
  const ownerSelector = makeOwnerSelector()

  const mapStateToProps = (state, ownProps) => {
    const comment = commentSelector(state, ownProps)
    const owner = ownerSelector(state, comment.owner)

    return {
      comment: comment,
      owner: owner,
    }
  }

  return mapStateToProps
}

export default connect(makeMapStateToProps)(Comment)
