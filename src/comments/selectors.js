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
  commentsFetchState,
  commentsState,
  (control, comments) => {
    if (control) {
      const denormalizedComments = _.map(control.ids, i => {
        const currentComment = comments[i]

        const denormalizedReplies = _.map(
          currentComment.replies.items,
          r => comments[r]
        )

        const mergedDenormalizedReplies = _.assign({}, currentComment, {
          replies: _.assign({}, currentComment.replies, {
            items: denormalizedReplies,
          }),
        })

        return mergedDenormalizedReplies
      })

      return denormalizedComments
    }

    return null
  }
)
