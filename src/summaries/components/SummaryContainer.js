import { connect } from 'react-redux'

import Summary from './Summary'

const mapStateToProps = (state, ownProps) => {
  return state.entities.summaries[ownProps.id] || {}
}

export default connect(mapStateToProps)(Summary)
