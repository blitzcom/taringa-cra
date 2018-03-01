import _ from 'lodash'
import { connect } from 'react-redux'

import Filters from './Filters'

const mapStateToProps = state => {
  return {
    items: _.values(state.filters),
  }
}

export default connect(mapStateToProps)(Filters)
