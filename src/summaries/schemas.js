import { schema } from 'normalizr'

import normalizer from '../utils/summary'

const channel = new schema.Entity('channels')
const user = new schema.Entity('users', {}, { idAttribute: 'username' })

export const summary = new schema.Entity(
  'summaries',
  {
    channel: channel,
    owner: user,
  },
  {
    processStrategy: entity => normalizer.normalize(entity),
  }
)
