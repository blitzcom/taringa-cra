import _ from 'lodash'
import { normalize } from 'normalizr'

import * as types from './types'
import { story } from './schemas'

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

export const createFetchControl = id => ({
  type: types.CREATE_FETCH_CONTROL,
  id: id,
})

const canFetchStory = (state, id) => {
  return state.control.storiesFetch[id].status !== 'fetching'
}

export const createStoryFetchControl = id => {
  return (dispatch, getState) => {
    const state = getState()

    if (id in state.control.storiesFetch) {
      return Promise.resolve()
    }

    dispatch(createFetchControl(id))
    return Promise.resolve()
  }
}

export const fetch = id => {
  return (dispatch, getState, axios) => {
    dispatch(createStoryFetchControl(id))

    try {
      if (!canFetchStory(getState(), id)) {
        return Promise.resolve()
      }
    } catch (e) {
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
