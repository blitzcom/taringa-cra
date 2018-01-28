import _ from 'lodash'
import * as types from './types'

export const summariesEntities = (state = {}, action) => {
  switch (action.type) {
    case types.INVALIDATE:
      return {}
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
  error: '',
  ids: [],
  status: 'success',
  totalCount: 0,
}

export const summariesFetchControl = (
  state = fetchControlInitialState,
  action
) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return _.assign({}, state, { status: 'fetching', error: '' })
    case types.FETCH_SUCCESS:
      return _.assign({}, state, {
        after: action.after,
        before: action.before,
        ids: _.union(state.ids, action.result),
        status: 'success',
        totalCount: action.totalCount,
      })
    case types.FETCH_FAILURE:
      return _.assign({}, state, { status: 'failure', error: action.message })
    case types.INVALIDATE:
      return fetchControlInitialState
    default:
      return state
  }
}
