import { connect } from 'react-redux'

import ChannelCard from './ChannelCard'

const mapStateToProps = (state, { id }) => {
  return state.entities.channels[id] || {}
}

export default connect(mapStateToProps)(ChannelCard)
