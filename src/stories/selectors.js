import _ from 'lodash'
import { createSelector } from 'reselect'

const storiesState = state => state.entities.stories
const storiesFetchState = state => state.control.storiesFetch

export const storiesSelector = createSelector(
  storiesState,
  storiesFetchState,
  (stories, control) => _.map(control.ids, id => stories[id])
)
