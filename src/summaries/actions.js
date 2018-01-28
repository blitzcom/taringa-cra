import _ from 'lodash'
import { normalize } from 'normalizr'

import * as types from './types'
import { summary } from './schemas'

export const fetchRequest = () => ({
  type: types.FETCH_REQUEST,
})

export const fetchSuccess = () => ({
  type: types.FETCH_SUCCESS,
})

export const fetchFailure = message => ({
  type: types.FETCH_FAILURE,
  message: message,
})

export const invalidate = () => {
  return dispatch => {
    dispatch({ type: types.INVALIDATE })
    return Promise.resolve()
  }
}

const canFetch = state => {
  return state.control.summariesFetch.status !== 'fetching'
}

export const fetch = () => {
  return (dispatch, getState, axios) => {
    if (!canFetch(getState())) {
      return Promise.resolve()
    }

    const { summariesFetch } = getState().control

    const params = {
      after: summariesFetch.after,
      count: 25,
    }

    dispatch(fetchRequest())

    return axios
      .get('/feed/global', { params })
      .then(response => response.data)
      .then(({ after, before, totalCount, items }) => {
        const action = _.assign(
          {},
          normalize(items, [summary]),
          fetchSuccess(),
          {
            after,
            before,
            totalCount,
          }
        )

        return dispatch(action)
      })
      .catch(error => dispatch(fetchFailure(error.message)))
  }
}
