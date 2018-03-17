import { createSelector } from 'reselect'

const fetchState = (state, ownProps) =>
  state.control.commentsFetch[ownProps.storyId]

export const commentsSelector = createSelector(fetchState, control => {
  return control || { status: 'fetching', items: [], totalCount: 0 }
})
