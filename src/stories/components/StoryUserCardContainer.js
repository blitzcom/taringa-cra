import { connect } from 'react-redux'

import UserCard from '../../users/components/UserCardContainer'

const mapStateToProps = (state, ownProps) => {
  const story = state.entities.stories[ownProps.storyId] || { owner: {} }

  return {
    username: story.owner.username,
  }
}

export default connect(mapStateToProps)(UserCard)
