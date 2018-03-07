import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Filters from './Filters'
import { filtersSelector } from '../selectors'

const mapStateToProps = (state, ownProps) => {
  return {
    items: filtersSelector(state),
  }
}

export default withRouter(connect(mapStateToProps)(Filters))
