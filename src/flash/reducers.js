import _ from 'lodash'

import { ADD } from './constants'

export const flash = (state = {}, { type, ...rest }) => {
  switch (type) {
    case ADD:
      return _.assign({}, state, { [rest.id]: rest })
    default:
      return state
  }
}
