import _ from 'lodash'
import { normalize } from 'normalizr'

import * as types from './types'
import { summary } from './schemas'

export const load = (id, url) => ({
  type: types.LOAD,
  id: id,
  url: url,
})

export const fetchRequest = id => ({
  type: types.FETCH_REQUEST,
  id: id,
})

export const fetchSuccess = (id, { items, ...rest }) => {
  return _.assign(
    { type: types.FETCH_SUCCESS, id },
    normalize(items, [summary]),
    rest
  )
}

export const fetchFailure = (id, message) => ({
  type: types.FETCH_FAILURE,
  message: message,
  id: id,
})

export const clear = id => ({
  type: types.CLEAR,
  id: id,
})
