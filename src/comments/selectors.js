import _ from 'lodash'
import { createSelector } from 'reselect'

const commentsState = state => state.entities.comments
const commentsFetchState = (state, props) =>
  state.control.commentsFetch[props.story]

export const commentControlSelector = createSelector(
  commentsFetchState,
  control => control
)

export const commentsSelector = createSelector(
  commentsState,
  commentsFetchState,
  (comments, control) => {
    if (control) {
      return _.map(control.ids, i => comments[i])
    }

    return null
  }
)
