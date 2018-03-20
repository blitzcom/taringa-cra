import { connect } from 'react-redux'

import ChannelCard from './ChannelCard'

const mapStateToProps = (state, ownProps) => {
  return {
    channel: state.entities.channels[ownProps.id],
    control: { status: 'success' },
  }
}

export default connect(mapStateToProps)(ChannelCard)
