import { connect } from 'react-redux'
import { compose } from 'recompose'

import withToggler from '../../HOC/withToggler'
import Toggler from './RepliesToggler'
import Replies from './Replies'
import { fetchRepliesTrigger } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return state.control.repliesFetch[ownProps.id]
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoad: () => dispatch(fetchRepliesTrigger(ownProps.id)),
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withToggler(Toggler)
)(Replies)
