import { connect } from 'react-redux'
import { makeRepliesSelector } from '../selectors'

import Replies from './Replies'

const makeMapStateToProps = () => {
  const repliesSelector = makeRepliesSelector()

  const mapStateToProps = (state, ownProps) => {
    return repliesSelector(state, ownProps)
  }

  return mapStateToProps
}

export default connect(makeMapStateToProps)(Replies)
