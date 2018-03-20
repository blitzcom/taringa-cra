import _ from 'lodash'
import { normalize } from 'normalizr'

import * as types from './types'
import { summary } from './schemas'
import { REPLACE } from '../constants'

export const remove = ids => ({
  type: types.REMOVE,
  ids: ids,
})

export const load = (id, url, strategy) => ({
  type: types.LOAD,
  id: id,
  strategy: strategy,
  url: url,
})

export const fetchRequest = (id, strategy) => ({
  type: types.FETCH_REQUEST,
  id: id,
  strategy: strategy,
})

export const fetchSuccess = (id, { items, ...rest }, strategy = REPLACE) => {
  return _.assign(
    { type: types.FETCH_SUCCESS, id, strategy },
    normalize(items, [summary]),
    rest
  )
}

export const fetchFailure = (id, message) => ({
  type: types.FETCH_FAILURE,
  message: message,
  id: id,
})

export const loadTail = (id, url) => ({
  type: types.LOAD_TAIL,
  id: id,
  url: url,
})

export const fetchTailRequest = id => ({
  type: types.FETCH_TAIL_REQUEST,
  id: id,
})

export const fetchTailSuccess = id => ({
  type: types.FETCH_TAIL_SUCCESS,
  id: id,
})

export const fetchTailFailure = (id, message) => ({
  type: types.FETCH_TAIL_FAILURE,
  id: id,
  message: message,
})

export const clearTail = id => ({
  type: types.CLEAR_TAIL,
  id: id,
})

export const clearTailIds = (id, ids) => ({
  type: types.CLEAR_TAIL_IDS,
  id: id,
  ids: ids,
})
