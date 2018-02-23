import { schema } from 'normalizr'

export const channel = new schema.Entity(
  'channels',
  {},
  { idAttribute: 'name' }
)
