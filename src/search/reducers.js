import _ from 'lodash'

import * as types from './types'

const searchingInitialState = {
  error: '',
  items: [],
  status: 'success',
}

const searchingReducer = (state = searchingInitialState, action) => {
  switch (action.type) {
    case types.SEARCH_REQUEST:
      return _.assign({}, state, { error: '', q: action.q, status: 'fetching' })
    case types.SEARCH_SUCCESS:
      return _.assign({}, state, {
        after: action.after,
        before: action.before,
        count: action.count,
        items: action.result,
        status: 'success',
        totalCount: action.totalCount,
      })
    case types.SEARCH_FAILURE:
      return _.assign({}, state, { error: action.message, status: 'failure' })
    case types.SEARCH_CLEAR:
      return searchingInitialState
    default:
      return state
  }
}

export const searching = (state = {}, action) => {
  switch (action.type) {
    case types.SEARCH_FAILURE:
    case types.SEARCH_REQUEST:
    case types.SEARCH_SUCCESS:
    case types.SEARCH_CLEAR:
      return _.assign({}, state, {
        [action.id]: searchingReducer(state[action.id], action),
      })
    default:
      return state
  }
}
