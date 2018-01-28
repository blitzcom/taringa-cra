import _ from 'lodash'
import { normalize } from 'normalizr'

import { comment } from './schemas'
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

export const createFetchControl = id => ({
  type: types.CREATE_FETCH_CONTROL,
  id: id,
})

export const createCommentsControl = id => {
  return (dispatch, getState, axios) => {
    const control = getState().control.commentsFetch[id]

    if (control) {
      return Promise.resolve()
    }

    dispatch(createFetchControl(id))
    return Promise.resolve()
  }
}

const canFetchComment = (state, id) => {
  console.log(state.control.commentsFetch[id])
  return state.control.commentsFetch[id].status !== 'fetching'
}

export const fetch = id => {
  return (dispatch, getState, axios) => {
    dispatch(createCommentsControl(id))

    console.log('canFetchComment %s', canFetchComment(getState(), id))

    if (!canFetchComment(getState(), id)) {
      return Promise.resolve()
    }

    dispatch(fetchRequest(id))

    return axios
      .get(`/story/${id}/comments`)
      .then(response => response.data)
      .then(data => {
        const action = _.assign(
          {},
          normalize(data.items, [comment]),
          fetchSuccess(id)
        )

        return dispatch(action)
      })
      .catch(error => dispatch(fetchFailure(id, error.message)))
  }
}
