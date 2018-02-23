import _ from 'lodash'
import { normalize } from 'normalizr'

import * as types from './types'
import { user as userSchema } from './schemas'

export const fetchTrigger = username => ({
  type: types.FETCH_TRIGGER,
  username: username,
})

export const fetchRequest = username => ({
  type: types.FETCH_REQUEST,
  username: username,
})

export const fetchSuccess = (username, user) =>
  _.assign(normalize(user, userSchema), {
    type: types.FETCH_SUCCESS,
    username: username,
  })

export const fetchFailure = (username, message) => ({
  type: types.FETCH_FAILURE,
  message: message,
  username: username,
})
