import { connect } from 'react-redux'

import withResource from '../../HOC/Resource'
import ChannelCard from './ChannelCardContainer'
import { fetchTrigger } from '../actions'

const mapStateToProps = (state, { id }) => {
  return state.control.channelsFetch[id] || { status: 'fetching' }
}

const mapDispatchToProps = (dispatch, { id }) => {
  return {
    fetchResource: () => dispatch(fetchTrigger(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withResource()(ChannelCard)
)
