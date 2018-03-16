import _ from 'lodash'
import { schema, normalize } from 'normalizr'

const processStrategy = entity =>
  _.omit(entity, ['attachment', 'classic', 'state'])

const user = new schema.Entity('users')

export const replies = new schema.Entity(
  'replies',
  {
    owner: user,
  },
  {
    processStrategy,
  }
)

export const replyRoot = new schema.Entity('replyRoots', {
  items: [replies],
})

export const comment = new schema.Entity(
  'comments',
  {
    replies: replyRoot,
    owner: user,
  },
  {
    processStrategy,
  }
)

export const commentRoot = new schema.Entity('commentRoot', {
  items: [comment],
})

export const normalizeComments = (comments, parentId) => {
  const items = _.map(comments.items, comment => {
    if (comment.replies) {
      const replies = _.assign({}, comment.replies, { id: comment.id })
      return _.assign({}, comment, { replies })
    }

    return _.assign({}, comment)
  })

  const prenormalize = _.assign({}, comments, { items: items, id: parentId })

  return normalize(prenormalize, commentRoot)
}
