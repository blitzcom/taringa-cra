import { connect } from 'react-redux'

import Comments from './Comments'
import { commentsSelector, commentsStatusSelector } from '../selectors'
import { load } from '../actions'

const mapStateToProps = (state, { storyId }) => {
  return {
    comments: commentsSelector(state, storyId),
    control: commentsStatusSelector(state, storyId),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRetry: () => dispatch(load(ownProps.storyId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
