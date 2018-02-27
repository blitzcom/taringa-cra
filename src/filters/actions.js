import * as types from './types'

export const set = filters => ({
  type: types.SET,
  filters: filters,
})

export const clear = () => ({
  type: types.CLEAR,
})
