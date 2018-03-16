import { connect } from 'react-redux'

import Comment from './Comment'

const mapStateToProps = (state, ownProps) => {
  const comment = state.entities.comments[ownProps.id]

  return {
    comment: comment,
    owner: state.entities.users[comment.owner],
  }
}

export default connect(mapStateToProps)(Comment)
