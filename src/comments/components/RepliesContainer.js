import { connect } from 'react-redux'

import Replies from './Replies'

const mapStateToProps = (state, ownProps) => {
  return state.control.repliesFetch[ownProps.id]
}

export default connect(mapStateToProps)(Replies)
