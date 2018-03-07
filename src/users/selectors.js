import { createSelector } from 'reselect'

const storyState = (state, storyId) => state.entities.stories[storyId]
const usersState = state => state.entities.users

export const userControlSelector = createSelector(
  storyState,
  usersState,
  (story, users) => {
    if (story && users[story.owner.username]) {
      return { status: 'success' }
    }

    return { status: 'fetching' }
  }
)

export const userSelector = createSelector(
  storyState,
  usersState,
  (story, users) => {
    if (story && users[story.owner.username]) {
      return users[story.owner.username]
    }

    return {}
  }
)
