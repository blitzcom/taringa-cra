import { connect } from 'react-redux'
import { makeChannelSelector } from '../selectors'

const makeStoryContainer = WrappedComponent => {
  const makeMapStateToProps = () => {
    const channelSelector = makeChannelSelector()

    const mapStateToProps = (state, ownProps) => {
      return {
        channel: channelSelector(state, ownProps),
      }
    }

    return mapStateToProps
  }

  return connect(makeMapStateToProps)(WrappedComponent)
}

export default makeStoryContainer
