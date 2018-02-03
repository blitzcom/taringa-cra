import _ from 'lodash'
import { createSelector } from 'reselect'

const summariesState = state => state.entities.summaries
const summariesFetchState = (state, props) =>
  state.control.summariesFetch[props.id]

export const summariesStatusSelector = createSelector(
  summariesFetchState,
  control => {
    if (!control) {
      return { error: '', status: 'fetching', hasMoreContent: true }
    }

    return {
      error: control.error,
      hasMoreContent: control.ids.length < control.totalCount,
      status: control.status,
    }
  }
)

export const summariesSelector = createSelector(
  summariesState,
  summariesFetchState,
  (summaries, control) =>
    control ? _.map(control.ids, id => summaries[id]) : []
)
