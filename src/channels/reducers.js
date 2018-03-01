import _ from 'lodash'

import * as types from './types'

export const channelEntities = (state = {}, action) => {
  if (action.entities && action.entities.channels) {
    return _.merge({}, state, action.entities.channels)
  }

  return state
}

const channelFetch = (state = { status: 'fetching', error: '' }, action) => {
  switch (action.type) {
    case types.FETCH_FAILURE:
      return _.assign({}, state, { status: 'failure', error: action.message })
    case types.FETCH_SUCCESS:
      return _.assign({}, state, { status: 'success' })
    case types.FETCH_REQUEST:
    default:
      return state
  }
}

export const channelsFetchControl = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
    case types.FETCH_SUCCESS:
    case types.FETCH_FAILURE:
      return _.assign({}, state, {
        [action.name]: channelFetch(state[action.name], action),
      })
    default:
      return state
  }
}

export const channelListFetch = (
  state = { error: '', result: [], status: 'success' },
  action
) => {
  switch (action.type) {
    case types.FETCH_LIST_REQUEST:
      return _.assign({}, state, { status: 'fetching', error: '' })
    case types.FETCH_LIST_SUCCESS:
      return _.assign({}, state, { status: 'success' }, action.payload)
    case types.FETCH_LIST_FAILURE:
      return _.assign({}, state, { status: 'failure', error: action.message })
    default:
      return state
  }
}
