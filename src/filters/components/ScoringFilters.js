import _ from 'lodash'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Filters from './Filters'

const mapStateToProps = state => {
  return {
    items: _.values(state.filters),
  }
}

export default withRouter(connect(mapStateToProps)(Filters))
