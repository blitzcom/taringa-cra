import { createSelector } from 'reselect'

const controlState = (state, props) => state.control.usersFetch[props.id]
const userState = (state, props) => state.entities.users[props.id]

export const controlSelector = createSelector(
  controlState,
  control => control || { status: 'fetching' }
)

export const userSelector = createSelector(userState, user => user || {})
