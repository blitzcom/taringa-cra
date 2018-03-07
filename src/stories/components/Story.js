import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Story.css'

import { UserCard } from '../../users/components/UserCard'
import StoryContent from './StoryContent'
import Comments from '../../comments/components/CommentsContainer'
import * as actions from '../actions'
import { slugToId } from '../../utils/slug'
import { storySelector, storyStateSelector } from '../selectors'

export class Story extends Component {
  componentDidMount() {
    this.props.fetchStoryWithComments()
  }

  render() {
    const { story, storyId, storyStatus: { status } } = this.props

    return (
      <div className="row">
        <div className="col-8">
          <StoryContent {...story} status={status} />
          <Comments storyId={storyId} />
        </div>

        <div className="col-4">
          <UserCard user={story.owner} control={{ status }} />
        </div>
      </div>
    )
  }
}

Story.defaultProps = {
  match: {
    params: {
      slug: '',
    },
  },
  storyStatus: {
    error: '',
    status: 'fetching',
  },
  fetchStoryWithComments: () => {},
  story: {},
}

const getStoryId = props => slugToId(props.match.params.slug)

const mapStateToProps = (state, props) => {
  const storyId = getStoryId(props)

  return {
    story: storySelector(state, storyId),
    storyId: storyId,
    storyStatus: storyStateSelector(state, storyId),
  }
}

const mapDispatchToProps = (dispatch, props) => {
  const storyId = getStoryId(props)

  return {
    fetchStoryWithComments: () => dispatch(actions.fetchWithComments(storyId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Story)
