import _ from 'lodash'
import { createSelector } from 'reselect'

const feedState = (state, ownProps) =>
  state.feed[ownProps.feedId] || { status: 'fetching', ids: [], totalCount: 0 }
const summariesState = state => state.entities.summaries
const usersState = state => state.entities.users
const channelsState = state => state.entities.channels

export const itemsSelector = createSelector(
  feedState,
  summariesState,
  usersState,
  channelsState,
  (feed, summaries, users, channels) => {
    return _.map(feed.ids, id => {
      const normalizedSummary = summaries[id]
      const summary = _.assign({}, normalizedSummary, {
        owner: users[normalizedSummary.owner],
        channel: channels[normalizedSummary.channel],
      })

      return summary
    })
  }
)
