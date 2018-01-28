import { schema } from 'normalizr'

export const replies = new schema.Entity('replies')

export const comment = new schema.Entity('comments', {
  replies: {
    items: [replies],
  },
})
