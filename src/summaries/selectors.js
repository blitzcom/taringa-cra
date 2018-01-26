import _ from 'lodash'
import { createSelector } from 'reselect'

const summariesState = state => state.entities.summaries
const summariesFetchState = state => state.control.summariesFetch

export const summariesSelector = createSelector(
  summariesState,
  summariesFetchState,
  (summaries, control) => _.map(control.ids, id => summaries[id])
)
