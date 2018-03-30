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

export const replyRoot = new schema.Entity(
  'replyRoots',
  {
    items: [replies],
  },
  {
    idAttribute: (entity, parent) => parent.id,
    processStrategy: entity => _.assign({}, entity, { status: 'success' }),
  }
)

export const comment = new schema.Entity(
  'comments',
  {
    owner: user,
    replies: replyRoot,
  },
  {
    processStrategy,
  }
)

export const commentRoot = new schema.Entity('commentRoot', {
  items: [comment],
})

export const normalizeComments = (comments, parentId) => {
  const prenormalize = _.assign(comments, { id: parentId })
  return normalize(prenormalize, commentRoot)
}
