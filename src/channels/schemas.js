import _ from 'lodash'
import { schema } from 'normalizr'

import { user } from '../users/schemas'

export const channel = new schema.Entity(
  'channels',
  { owner: user },
  { idAttribute: 'name', processStrategy: entity => _.omit(entity, 'state') }
)
