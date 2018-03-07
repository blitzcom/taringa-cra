import React, { Component } from 'react'
import { connect } from 'react-redux'

import StoryContent from './StoryContent'
import { fetchWithComments } from '../actions'
import { storySelector, storyStateSelector } from '../selectors'

class StoryContentContainer extends Component {
  componentDidMount() {
    this.props.fetch()
  }

  render() {
    return <StoryContent {...this.props} />
  }
}

const mapStateToProps = (state, { storyId }) => {
  return {
    story: storySelector(state, storyId),
    control: storyStateSelector(state, storyId),
  }
}

const mapDispatchToProps = (dispatch, { storyId }) => {
  return {
    fetch: () => dispatch(fetchWithComments(storyId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  StoryContentContainer
)
