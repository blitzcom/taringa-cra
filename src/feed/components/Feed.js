import { connect } from 'react-redux'

import infiniteScroll from '../../HOC/InfiniteScroll'
import Summaries from '../../summaries/components/Summaries'
import { load, clear } from '../../summaries/actions'
import { summariesSelector } from '../selectors'

const mapStateToProps = (state, ownProps) => {
  return summariesSelector(state, ownProps)
}

const mapDispatchToProps = (dispatch, { feedId, url }) => {
  return {
    onLoad: () => {
      dispatch(clear(feedId))
      dispatch(load(feedId, url))
    },
    onLoadMore: () => dispatch(load(feedId, url)),
    onRetry: () => dispatch(load(feedId, url)),
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
