import { connect } from 'react-redux'
import { normalizeStory } from '../../summaries/utils'

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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoad: () => dispatch(load(ownProps.feedId, ownProps.url)),
    onLoadMore: () => dispatch(loadTail(ownProps.feedId, ownProps.url)),
    onRetry: () => dispatch(load(ownProps.feedId, ownProps.url)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Summaries)
