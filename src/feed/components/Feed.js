import { connect } from 'react-redux'
import { normalizeStory } from '../../summaries/utils'

import Summaries from '../../summaries/components/Summaries'
import { load } from '../../summaries/actions'

const mapStateToProps = (state, ownProps) => {
  const feed = state.feed[ownProps.feedId] || { status: 'fetching', ids: [] }
  const summaries = state.entities.summaries

  return {
    items: feed.ids.map(id => normalizeStory(summaries[id])),
    size: state.settings.itemSize,
    status: feed.status,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoad: () => dispatch(load(ownProps.feedId, ownProps.url)),
    onRetry: () => dispatch(load(ownProps.feedId, ownProps.url)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Summaries)
