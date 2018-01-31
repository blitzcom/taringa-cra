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

const canFetchComment = (state, id) => {
  const control = state.control.commentsFetch[id]
  return !control || control.status !== 'fetching'
}

export const fetch = id => {
  return (dispatch, getState, axios) => {
    if (!canFetchComment(getState(), id) || !id) {
      return Promise.resolve()
    }

    const control = getState().control.commentsFetch[id]
    let params = { count: 25 }

    if (control && control.after) {
      _.assign({}, params, { after: control.after })
    }

    dispatch(fetchRequest(id))

    return axios
      .get(`/story/${id}/comments`, { params })
      .then(response => response.data)
      .then(({ after, before, totalCount, count, items }) => {
        const normalizedEntities = normalize(items, [comment])
        const action = _.assign({}, normalizedEntities, fetchSuccess(id), {
          after,
          before,
          count,
          totalCount,
        })

        return dispatch(action)
      })
      .catch(error => dispatch(fetchFailure(id, error.message)))
  }
}
