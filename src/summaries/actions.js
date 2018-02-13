import * as types from './types'

export const remove = ids => ({
  type: types.REMOVE,
  ids: ids,
})

export const load = (id, url) => ({
  type: types.LOAD,
  id: id,
  url: url,
})

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
  message: message,
  id: id,
})

export const loadTail = (id, after, url) => ({
  type: types.LOAD_TAIL,
  after: after,
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

export const clearTail = pathname => ({
  type: types.CLEAR_TAIL,
  pathname: pathname,
})

export const clearTailIds = (id, ids) => ({
  type: types.CLEAR_TAIL_IDS,
  id: id,
  ids: ids,
})
