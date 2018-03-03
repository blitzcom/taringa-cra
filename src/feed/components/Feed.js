import { connect } from 'react-redux'
import { normalizeStory } from '../../summaries/utils'

import infiniteScroll from '../../HOC/FilterableInfiniteScroll'
import Summaries from '../../summaries/components/Summaries'
import { load, loadTail } from '../../summaries/actions'

const mapStateToProps = (state, ownProps) => {
  const defaultFeed = { status: 'fetching', ids: [], totalCount: 0 }
  const feed = state.feed[ownProps.feedId] || defaultFeed
  const summaries = state.entities.summaries
  const hasMoreContent = feed.ids.length < feed.totalCount

  return {
    items: feed.ids.map(id => normalizeStory(summaries[id])),
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
