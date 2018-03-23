import _ from 'lodash'
import { normalize } from 'normalizr'

import * as types from './types'
import { summary } from '../summaries/schemas'
import { user } from '../users/schemas'
import { channel } from '../channels/schemas'

const schemas = {
  channels: channel,
  stories: summary,
  users: user,
}

export const searchTrigger = (id, q) => ({
  type: types.SEARCH_TRIGGER,
  id: id,
  q: q,
})

export const searchRequest = (id, q) => ({
  type: types.SEARCH_REQUEST,
  id: id,
  q: q,
})

export const searchSuccess = (id, { items, ...rest }) => {
  const schema = schemas[id]
  return _.assign(
    { type: types.SEARCH_SUCCESS, id: id },
    normalize(items, [schema]),
    rest
  )
}

export const searchFailure = (id, message) => ({
  type: types.SEARCH_FAILURE,
  id: id,
  message: message,
})

export const searchCancel = () => ({
  type: types.SEARCH_CANCEL,
})

export const searchClear = id => ({
  type: types.SEARCH_CLEAR,
  id: id,
})
