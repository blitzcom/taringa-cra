import { connect } from 'react-redux'

import infiniteScroll from '../../HOC/InfiniteScroll'
import Comments from './Comments'
import { load } from '../actions'
import { PUSH } from '../../constants'
import { commentsSelector } from '../selectors'

const mapStateToProps = (state, ownProps) => {
  return commentsSelector(state, ownProps)
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRetry: () => dispatch(load(ownProps.storyId, PUSH)),
    onLoadMore: () => dispatch(load(ownProps.storyId, PUSH)),
  }
}

const getStatus = props => props.status
const getHasMoreContent = props => props.items.length < props.totalCount

export default connect(mapStateToProps, mapDispatchToProps)(
  infiniteScroll(getStatus, getHasMoreContent)(Comments)
)
