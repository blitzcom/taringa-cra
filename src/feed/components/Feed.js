import { connect } from 'react-redux'

import infiniteScroll from '../../HOC/InfiniteScroll'
import Summaries from '../../summaries/components/Summaries'
import { load, loadTail } from '../../summaries/actions'
import { summariesSelector } from '../selectors'

const mapStateToProps = (state, ownProps) => {
  return summariesSelector(state, ownProps)
}

const mapDispatchToProps = (dispatch, { feedId, url }) => {
  return {
    onLoad: () => dispatch(load(feedId, url)),
    onLoadMore: () => dispatch(loadTail(feedId, url)),
    onRetry: () => dispatch(loadTail(feedId, url)),
  }
}

const getStatus = props => props.status
const getHasMoreContent = ({ ids, totalCount, count }) => {
  return (totalCount && ids.length < totalCount) || (!totalCount && count >= 20)
}
const getWillReload = (props, prevProps) => props.filter !== prevProps.filter

export default connect(mapStateToProps, mapDispatchToProps)(
  infiniteScroll(getStatus, getHasMoreContent, getWillReload)(Summaries)
)
