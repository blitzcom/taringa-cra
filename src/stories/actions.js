import _ from 'lodash'
import { normalize } from 'normalizr'

import * as types from './types'
import { story } from './schemas'
import { fetch as fetchComments } from '../comments/actions'

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

const canFetchStory = (state, id) => {
  const control = state.control.storiesFetch[id]
  return !control || control.status !== 'fetching'
}

export const fetch = id => {
  return (dispatch, getState, axios) => {
    if (!canFetchStory(getState(), id) || !id) {
      return Promise.resolve()
    }

    dispatch(fetchRequest(id))

    return axios
      .get(`/story/${id}`)
      .then(response => response.data)
      .then(data => {
        const action = _.assign({}, normalize(data, story), fetchSuccess(id))
        return dispatch(action)
      })
      .catch(error => dispatch(fetchFailure(id, error.message)))
  }
}

export const fetchWithComments = id => {
  return (dispatch, getState) => {
    return dispatch(fetch(id)).then(result => {
      if (!result || result.type === types.FETCH_FAILURE) {
        return Promise.resolve()
      }

      return dispatch(fetchComments(id))
    })
  }
}
