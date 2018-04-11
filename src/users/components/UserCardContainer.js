import _ from 'lodash'
import { connect } from 'react-redux'
import { compose, lifecycle, pure, renderComponent } from 'recompose'

import branch from '../../HOC/branch'
import Loader from '../../common/Loader'
import Failure from '../../common/Failure'
import UserCard from './UserCard'
import { fetchTrigger } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return _.assign(
    {},
    state.control.usersFetch[ownProps.username] || { status: 'fetching' },
    state.entities.users[ownProps.username] || {}
  )
}

const mapDispatchToProps = (dispatch, { username }) => {
  return {
    fetch: username ? () => dispatch(fetchTrigger(username)) : () => {},
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.fetch()
    },
    componentDidUpdate(prevProps) {
      if (this.props.username !== prevProps.username) {
        this.props.fetch()
      }
    },
  }),
  branch(
    [({ status }) => status === 'fetching', renderComponent(Loader)],
    [({ status }) => status === 'failure', renderComponent(Failure)]
  ),
  pure
)(UserCard)
