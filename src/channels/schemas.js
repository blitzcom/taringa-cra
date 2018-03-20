import { schema } from 'normalizr'

import { user } from '../users/schemas'

export const channel = new schema.Entity(
  'channels',
  { owner: user },
  { idAttribute: 'name' }
)
