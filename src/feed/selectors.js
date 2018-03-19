import _ from 'lodash'
import { createSelector } from 'reselect'

const feedState = (state, ownProps) =>
  state.feed[ownProps.feedId] || { status: 'fetching', ids: [], totalCount: 0 }
const sizeState = state => state.settings.itemSize

export const summariesSelector = createSelector(
  sizeState,
  feedState,
  (size, feed) => {
    return _.assign({ size }, feed)
  }
)
