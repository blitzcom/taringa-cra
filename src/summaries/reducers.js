import _ from 'lodash'
import * as types from './types'
import { PUSH } from '../constants'

export const summariesEntities = (state = {}, action) => {
  switch (action.type) {
    case types.REMOVE:
      return _.omit(state, action.ids)
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
      return _.assign({}, state, {
        error: '',
        status: 'fetching',
        ids: action.strategy === PUSH ? state.ids : [],
      })
    case types.FETCH_SUCCESS:
      return _.assign({}, state, {
        after: action.after,
        before: action.before,
        count: action.count,
        ids:
          action.strategy === PUSH
            ? _.union(state.ids, action.result)
            : action.result,
        status: 'success',
        totalCount: action.totalCount,
      })
    case types.FETCH_FAILURE:
      return _.assign({}, state, { status: 'failure', error: action.message })
    default:
      return state
  }
}

export const summariesFetchControl = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
    case types.FETCH_SUCCESS:
    case types.FETCH_FAILURE:
      return _.assign({}, state, {
        [action.id]: fetchingControl(state[action.id], action),
      })
    default:
      return state
  }
}
