import { connect } from 'react-redux'

import infiniteScroll from '../../HOC/InfiniteScroll'
import Comments from './Comments'
import { load } from '../actions'
import { PUSH } from '../../constants'

const mapStateToProps = (state, { storyId }) => {
  return (
    state.control.commentsFetch[storyId] || {
      status: 'fetching',
      items: [],
      totalCount: 0,
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRetry: () => dispatch(load(ownProps.storyId, PUSH)),
    onLoadMore: () => dispatch(load(ownProps.storyId, PUSH)),
  }
}

const canFetch = ({ status, items, totalCount }) => {
  return status !== 'fetching' && items.length < totalCount
}

export default connect(mapStateToProps, mapDispatchToProps)(
  infiniteScroll(canFetch)(Comments)
)
