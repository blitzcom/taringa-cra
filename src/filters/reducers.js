import * as types from './types'

export const filters = (state = {}, action) => {
  switch (action.type) {
    case types.SET:
      return action.filters
    case types.CLEAR:
      return {}
    default:
      return state
  }
}
