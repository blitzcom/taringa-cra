import _ from 'lodash'
import { schema } from 'normalizr'

import normalizer from '../utils/summary'

const user = new schema.Entity('users', {}, { idAttribute: 'username' })

const channel = new schema.Entity(
  'channels',
  {
    owner: user,
  },
  {
    processStrategy: entity => _.omit(entity, ['state']),
  }
)

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
