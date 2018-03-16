import * as types from './types'
import { REPLACE } from '../constants'

export const fetchRequest = id => ({
  type: types.FETCH_REQUEST,
  id: id,
})

export const fetchSuccess = (id, strategy = REPLACE) => ({
  type: types.FETCH_SUCCESS,
  id: id,
  strategy: strategy,
})

export const fetchFailure = (id, message) => ({
  type: types.FETCH_FAILURE,
  id: id,
  message: message,
})

export const load = (id, strategy = REPLACE) => ({
  type: types.FETCH_TRIGGER,
  id: id,
  strategy: strategy,
})
