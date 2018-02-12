import _ from 'lodash'
import { normalize } from 'normalizr'

import * as types from './types'
import { summary } from './schemas'

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

const canFetch = (state, id) => {
  const control = state.feed[id]
  return !control || control.status !== 'fetching'
}

const hasItems = (state, id) => {
  const control = state.feed[id]
  return control && control.ids.length > 0
}

export const fetch = (id, url, keepLoading = true) => {
  return (dispatch, getState, axios) => {
    if (!canFetch(getState(), id)) {
      return Promise.resolve()
    }

    if (!keepLoading && hasItems(getState(), id)) {
      return Promise.resolve()
    }

    const control = getState().feed[id]
    let params = { count: 25 }

    if (control && 'after' in control) {
      params = _.assign({}, params, { after: control.after })
    }

    dispatch(fetchRequest(id))

    return axios
      .get(url, { params })
      .then(response => response.data)
      .then(({ after, before, totalCount, items }) => {
        const action = _.assign(
          {},
          normalize(items, [summary]),
          fetchSuccess(id),
          {
            after,
            before,
            totalCount,
          }
        )

        return dispatch(action)
      })
      .catch(error => dispatch(fetchFailure(id, error.message)))
  }
}
