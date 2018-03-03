import { connect } from 'react-redux'

import withResource from '../../HOC/Resource'
import ChannelCard from './ChannelCard'
import { fetchTrigger } from '../actions'

const mapStateToProps = (state, { channel }) => {
  return {
    channel: state.entities.channels[channel] || {},
    control: state.control.channelsFetch[channel] || { status: 'fetching' },
  }
}

const mapDispatchToProps = (dispatch, { channel }) => {
  return {
    fetchResource: () => dispatch(fetchTrigger(channel)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withResource()(ChannelCard)
)
