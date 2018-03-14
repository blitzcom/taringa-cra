import { connect } from 'react-redux'

import StoryChannel from './StoryChannel'
import { makeChannelSelector } from '../selectors'

const makeMapStateToProps = () => {
  const channelSelector = makeChannelSelector()

  const mapStateToProps = (state, ownProps) => {
    return {
      details: channelSelector(state, ownProps),
    }
  }

  return mapStateToProps
}

export default connect(makeMapStateToProps)(StoryChannel)
