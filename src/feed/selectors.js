import _ from 'lodash'
import { createSelector } from 'reselect'

const feedState = (state, ownProps) =>
  state.feed[ownProps.feedId] || { status: 'fetching', ids: [], totalCount: 0 }

const summariesState = state => state.entities.summaries

export const itemsSelector = createSelector(
  feedState,
  summariesState,
  (feed, summaries) => {
    return _.map(feed.ids, id => summaries[id])
  }
)
