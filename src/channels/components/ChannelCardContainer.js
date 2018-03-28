import { connect } from 'react-redux'

import ChannelCard from './ChannelCard'
import { makeChannelSelector } from '../selectors'

const makeMapStateToProps = () => {
  const channelSelector = makeChannelSelector()

  const mapStateToProps = (state, ownProps) => {
    return channelSelector(state, ownProps)
  }

  return mapStateToProps
}

export default connect(makeMapStateToProps)(ChannelCard)
