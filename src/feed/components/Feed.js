import { connect } from 'react-redux'

import infiniteScroll from '../../HOC/FilterableInfiniteScroll'
import Summaries from '../../summaries/components/Summaries'
import { load, loadTail } from '../../summaries/actions'
import { itemsSelector } from '../selectors'

const mapStateToProps = (state, ownProps) => {
  const defaultFeed = { status: 'fetching', ids: [], totalCount: 0 }
  const feed = state.feed[ownProps.feedId] || defaultFeed
  const hasMoreContent = feed.ids.length < feed.totalCount

  return {
    items: itemsSelector(state, ownProps),
    size: state.settings.itemSize,
    status: feed.status,
    hasMoreContent: hasMoreContent,
  }
}

const mapDispatchToProps = (dispatch, { feedId, url }) => {
  return {
    onLoad: () => dispatch(load(feedId, url)),
    onLoadMore: () => dispatch(loadTail(feedId, url)),
    onRetry: () => dispatch(loadTail(feedId, url)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  infiniteScroll()(Summaries)
)
