import _ from 'lodash'
import { normalize } from 'normalizr'

import * as types from './types'
import { story } from './schemas'

export const fetchRequest = () => ({
  type: types.FETCH_REQUEST,
})

export const fetchSuccess = () => ({
  type: types.FETCH_SUCCESS,
})

export const fetchFailure = (message) => ({
  type: types.FETCH_FAILURE,
  message: message,
})

const canFetch = (state) => {
  return state.control.storiesFetch.status !== 'fetching'
}

export const fetch = () => {
  return (dispatch, getState, axios) => {
    if (!canFetch(getState())) {
      return Promise.resolve()
    }

    dispatch(fetchRequest())

    return axios.get('/feed/global')
      .then(response => response.data)
      .then(data => {
        const action = _.assign({}, normalize(data, [story]), fetchSuccess())
        return dispatch(action)
      })
      .catch(error => dispatch(fetchFailure(error.message)))
  }
}
