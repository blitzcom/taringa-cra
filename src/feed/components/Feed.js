import { connect } from 'react-redux'

import infiniteScroll from '../../HOC/InfiniteScroll'
import Summaries from '../../summaries/components/Summaries'
import { load } from '../../summaries/actions'
import { PUSH, REPLACE } from '../../constants'
import { summariesSelector } from '../selectors'

const mapStateToProps = (state, ownProps) => {
  return summariesSelector(state, ownProps)
}

const mapDispatchToProps = (dispatch, { feedId, url }) => {
  return {
    onLoad: () => dispatch(load(feedId, url, REPLACE)),
    onLoadMore: () => dispatch(load(feedId, url, PUSH)),
    onRetry: () => dispatch(load(feedId, url, PUSH)),
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
