import { connect } from 'react-redux'

import Reply from './Reply'

const mapStateToProps = (state, ownProps) => {
  return state.entities.comments[ownProps.id]
}

export default connect(mapStateToProps)(Reply)
