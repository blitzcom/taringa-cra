import { connect } from 'react-redux'
import { compose } from 'recompose'

import infiniteScroll from '../../HOC/InfiniteScroll'
import withError from '../../HOC/withError'
import withLoader from '../../HOC/withLoader'
import Summaries from '../../summaries/components/Summaries'
import { load, clear } from '../../summaries/actions'

const mapStateToProps = (state, ownProps) => {
  return (
    state.feed[ownProps.feedId] || {
      ids: [],
      status: 'fetching',
      totalCount: 0,
    }
  )
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  infiniteScroll(getStatus, getHasMoreContent, getWillReload),
  withLoader('my-4', 'fa-2x'),
  withError()
)(Summaries)
