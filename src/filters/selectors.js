import _ from 'lodash'
import { createSelector } from 'reselect'

import { filters as defaultFilters } from '../global/constants'

const filtersState = state => state.filters

export const filtersSelector = createSelector(filtersState, filters => {
  const filtersInState = _.values(filters)

  if (filtersInState.length === 0) {
    return _.values(defaultFilters)
  }

  return _.values(filtersInState)
})
