import { createSelector } from 'reselect'

const feedState = (state, ownProps) => state.feed[ownProps.feedId]

export const summariesSelector = createSelector(
  feedState,
  feed => feed || { status: 'fetching', ids: [], totalCount: 0 }
)
