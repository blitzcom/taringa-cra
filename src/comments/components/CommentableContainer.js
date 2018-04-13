import { connect } from 'react-redux'
import { compose, pure } from 'recompose'

import Commentable from './Commentable'

const mapStateToProps = (state, ownProps) => {
  return state.entities.comments[ownProps.id]
}

export default compose(connect(mapStateToProps), pure)(Commentable)
