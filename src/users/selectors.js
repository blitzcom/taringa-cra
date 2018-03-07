import { createSelector } from 'reselect'

const storyState = (state, storyId) => state.entities.stories[storyId]
const usersControlState = state => state.control.usersFetch
const usersState = state => state.entities.users

export const userControlSelector = createSelector(
  storyState,
  usersControlState,
  usersState,
  (story, controls, users) => {
    if (story && controls[story.owner.username]) {
      return controls[story.owner.username]
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
