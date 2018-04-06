import _ from 'lodash'
import { normalize } from 'normalizr'

import { comment } from './schemas'
import * as types from './types'

export const fetchRequest = id => ({
  type: types.FETCH_REQUEST,
  id: id,
})

export const fetchSuccess = id => ({
  type: types.FETCH_SUCCESS,
  id: id,
})

export const fetchFailure = (id, message) => ({
  type: types.FETCH_FAILURE,
  id: id,
  message: message,
})

export const load = id => ({
  type: types.FETCH_TRIGGER,
  id: id,
})

export const clear = id => ({
  type: types.CLEAR,
  id: id,
})

// Replies

export const fetchRepliesTrigger = id => ({
  type: types.FETCH_REPLIES_TRIGGER,
  id: id,
})

export const fetchRepliesRequest = id => ({
  type: types.FETCH_REPLIES_REQUEST,
  id: id,
})

export const fetchRepliesSuccess = (id, result) => {
  return _.assign(
    {},
    { type: types.FETCH_REPLIES_SUCCESS, id },
    normalize(result, comment)
  )
}

export const fetchRepliesFailure = (id, message) => ({
  type: types.FETCH_REPLIES_FAILURE,
  id: id,
  message: message,
})
