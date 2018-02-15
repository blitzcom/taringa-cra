import * as types from './types'

export const remove = ids => ({
  type: types.REMOVE,
  ids: ids,
})

export const load = (id, url, includeUser = false) => ({
  type: types.LOAD,
  id: id,
  includeUser: includeUser,
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
