import _ from 'lodash'
import * as types from './constants'

export const add = (flash, kind = 'primary') => ({
  flash: flash,
  id: _.uniqueId('flash_'),
  kind: kind,
  type: types.ADD,
})
