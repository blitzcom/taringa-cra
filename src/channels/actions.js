import _ from 'lodash'
import { normalize } from 'normalizr'

import * as types from './types'
import { channel as channelSchema } from './schemas'

export const fetchTrigger = name => ({
  type: types.FETCH_TRIGGER,
  name: name,
})

export const fetchRequest = name => ({
  type: types.FETCH_REQUEST,
  name: name,
})

export const fetchSuccess = (name, channel) =>
  _.assign({}, normalize(channel, channelSchema), {
    type: types.FETCH_SUCCESS,
    name: name,
  })

export const fetchFailure = (name, message) => ({
  type: types.FETCH_FAILURE,
  name: name,
  message: message,
})

export const fetchListTrigger = url => ({
  type: types.FETCH_LIST_TRIGGER,
  url: url,
})

export const fetchListRequest = () => ({
  type: types.FETCH_LIST_REQUEST,
})

export const fetchListSuccess = ({ items, ...rest }) => {
  const { entities, result } = normalize(items, [channelSchema])

  return {
    type: types.FETCH_LIST_SUCCESS,
    entities: entities,
    payload: _.assign({}, rest, { result: result }),
  }
}

export const fetchListFailure = message => ({
  type: types.FETCH_LIST_SUCCESS,
  message: message,
})
