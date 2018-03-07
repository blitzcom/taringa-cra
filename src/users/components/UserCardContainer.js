import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import UserCard from './UserCard'
import { userSelector, userControlSelector } from '../selectors'

const mapStateToProps = (state, { storyId }) => {
  return {
    user: userSelector(state, storyId),
    control: userControlSelector(state, storyId),
  }
}

export default withRouter(connect(mapStateToProps)(UserCard))
