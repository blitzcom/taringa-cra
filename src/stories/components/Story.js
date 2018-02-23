import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Story.css'

import { UserCard } from '../../users/components/UserCard'
import StoryContent from './StoryContent'
import Comments from '../../comments/components/Comments'
import * as actions from '../actions'
import { load as loadComments } from '../../comments/actions'
import { slugToId } from '../../utils/slug'
import { storySelector, storyStateSelector } from '../selectors'
import {
  commentsStatusSelector,
  commentsSelector,
} from '../../comments/selectors'

export class Story extends Component {
  componentDidMount() {
    this.props.fetchStoryWithComments()
  }

  render() {
    const {
      comments,
      commentsStatus,
      loadComments,
      story,
      storyStatus: { status },
    } = this.props

    const hasMoreContent =
      comments !== null &&
      'totalCount' in commentsStatus &&
      comments.length < commentsStatus.totalCount
    const hasSuccess = status === 'success'

    return (
      <div className="row">
        <div className="col-8">
          <StoryContent {...story} status={status} />
          {hasSuccess && (
            <Comments
              comments={comments}
              loadMore={loadComments}
              hasMoreContent={hasMoreContent}
              {...commentsStatus}
            />
          )}
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
  commentsStatus: {
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
    storyStatus: storyStateSelector(state, storyId),
    commentsStatus: commentsStatusSelector(state, storyId),
    comments: commentsSelector(state, storyId),
  }
}

const mapDispatchToProps = (dispatch, props) => {
  const storyId = getStoryId(props)

  return {
    loadComments: () => dispatch(loadComments(storyId)),
    fetchStoryWithComments: () => dispatch(actions.fetchWithComments(storyId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Story)
