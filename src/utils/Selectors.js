import _ from 'lodash'
import { createSelectorCreator, defaultMemoize } from 'reselect'

export const createSelector = createSelectorCreator(defaultMemoize, _.isEqual)
