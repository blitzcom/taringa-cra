import _ from 'lodash'
import * as types from './types'

export const summariesEntities = (state = {}, action) => {
  switch (action.type) {
    default:
      if (action.entities && action.entities.summaries) {
        return _.merge({}, state, action.entities.summaries)
      }

      return state
  }
}

const fetchControlInitialState = {
  after: null,
  before: null,
  count: 0,
  error: '',
  ids: [],
  status: 'success',
  totalCount: 0,
}

const fetchingControl = (state = fetchControlInitialState, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return _.assign({}, state, { error: '', status: 'fetching' })
    case types.FETCH_SUCCESS:
      return _.assign({}, state, {
        after: action.after,
        before: action.before,
        count: action.count,
        ids: _.union(state.ids, action.result),
        status: 'success',
        totalCount: action.totalCount,
      })
    case types.FETCH_FAILURE:
      return _.assign({}, state, { status: 'failure', error: action.message })
    case types.CLEAR:
      return fetchControlInitialState
    default:
      return state
  }
}

export const summariesFetchControl = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
    case types.FETCH_SUCCESS:
    case types.FETCH_FAILURE:
    case types.CLEAR:
      return _.assign({}, state, {
        [action.id]: fetchingControl(state[action.id], action),
      })
    default:
      return state
  }
}
