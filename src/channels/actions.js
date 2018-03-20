import _ from 'lodash'
import { normalize } from 'normalizr'

import * as types from './types'
import { channel as channelSchema } from './schemas'
import { REPLACE } from '../constants'

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

export const fetchListTrigger = (url, strategy) => ({
  type: types.FETCH_LIST_TRIGGER,
  strategy: strategy,
  url: url,
})

export const fetchListRequest = (strategy = REPLACE) => ({
  type: types.FETCH_LIST_REQUEST,
  strategy: strategy,
})

export const fetchListSuccess = ({ items, ...rest }, strategy = REPLACE) => {
  return _.assign({}, normalize(items, [channelSchema]), rest, {
    type: types.FETCH_LIST_SUCCESS,
    strategy: strategy,
  })
}

export const fetchListFailure = message => ({
  type: types.FETCH_LIST_FAILURE,
  message: message,
})
