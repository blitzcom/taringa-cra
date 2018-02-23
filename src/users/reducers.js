import _ from 'lodash'

import * as types from './types'

export const usersEntities = (state = {}, action) => {
  if (action.entities && action.entities.users) {
    return _.merge({}, state, action.entities.users)
  }

  return state
}

const userFetch = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return _.assign({}, state, { status: 'fetching', error: '' })
    case types.FETCH_SUCCESS:
      return _.assign({}, state, { status: 'success' })
    case types.FETCH_FAILURE:
      return _.assign({}, state, { status: 'failure', error: action.message })
    default:
      return state
  }
}

export const usersFetchControl = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
    case types.FETCH_SUCCESS:
    case types.FETCH_FAILURE:
      return _.assign({}, state, {
        [action.username]: userFetch(state[action.username], action),
      })
    default:
      return state
  }
}
