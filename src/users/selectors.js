import { createSelector } from 'reselect'

const userControlState = (state, ownProps) =>
  state.control.usersFetch[ownProps.username]
const userState = (state, ownProps) => state.entities.users[ownProps.username]

export const userControlSelector = createSelector(userControlState, control => {
  return control || { status: 'fetching' }
})

export const userSelector = createSelector(userState, user => {
  return user || {}
})
