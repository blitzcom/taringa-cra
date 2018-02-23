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
