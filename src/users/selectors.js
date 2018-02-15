import { createSelector } from 'reselect'

const userState = (state, props) =>
  state.entities.users[props.match.params.username]

export const userSelector = createSelector(
  userState,
  user => user || { status: 'fetching' }
)
