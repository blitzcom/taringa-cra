import _ from 'lodash'
import * as types from './types'

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
  error: '',
  ids: [],
  status: 'success',
  totalCount: 0,
}

const fetchingControl = (state = fetchControlInitialState, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return _.assign({}, state, { status: 'fetching', error: '' })
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
    case types.CLEAR_TAIL_IDS:
      return _.assign({}, state, { ids: action.ids })
    default:
      return state
  }
}

const fetchingTail = (state = fetchControlInitialState, action) => {
  switch (action.type) {
    case types.FETCH_TAIL_REQUEST:
      return _.assign({}, state, { status: 'fetching', error: '' })
    case types.FETCH_TAIL_SUCCESS:
      return _.assign({}, state, {
        after: action.after,
        before: action.before,
        ids: _.union(state.ids, action.result),
        status: 'success',
        totalCount: action.totalCount,
      })
    case types.FETCH_TAIL_FAILURE:
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
    case types.CLEAR_TAIL_IDS:
      return _.assign({}, state, {
        [action.id]: fetchingControl(state[action.id], action),
      })
    case types.FETCH_TAIL_REQUEST:
    case types.FETCH_TAIL_SUCCESS:
    case types.FETCH_TAIL_FAILURE:
      return _.assign({}, state, {
        [action.id]: fetchingTail(state[action.id], action),
      })
    default:
      return state
  }
}
