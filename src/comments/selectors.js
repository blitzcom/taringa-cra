import { createSelector } from '../utils/Selectors'

const fetchState = (state, ownProps) =>
  state.control.commentsFetch[ownProps.storyId]

export const commentsSelector = createSelector(fetchState, control => {
  return control || { status: 'fetching', items: [], totalCount: 0 }
})

const commentState = (state, ownProps) => state.entities.comments[ownProps.id]

export const makeCommentSelector = () => {
  return createSelector(commentState, comment => {
    return comment || {}
  })
}

const ownerState = (state, owner) => state.entities.users[owner]

export const makeOwnerSelector = () => {
  return createSelector(ownerState, owner => {
    return owner || {}
  })
}

const repliesState = (state, ownProps) =>
  state.control.repliesFetch[ownProps.id]

export const makeRepliesSelector = () => {
  return createSelector(repliesState, control => {
    return control || {}
  })
}
