import _ from 'lodash'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Filters from './Filters'
import { filters } from '../../global/constants'

const mapStateToProps = state => {
  const filtersInState = _.values(state.filters)
  const defaultFilters = _.values(filters)

  return {
    items: filtersInState.length > 0 ? filtersInState : defaultFilters,
  }
}

export default withRouter(connect(mapStateToProps)(Filters))
