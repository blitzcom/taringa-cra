import { connect } from 'react-redux'

import Comment from './Comment'

const mapStateToProps = (state, ownProps) => {
  return state.entities.comments[ownProps.id]
}

export default connect(mapStateToProps)(Comment)
