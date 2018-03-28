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
