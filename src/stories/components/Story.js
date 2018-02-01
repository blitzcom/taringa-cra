import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Story.css'

import Card from '../../users/components/Card'
import StoryContent from './StoryContent'
import Comments from '../../comments/components/Comments'
import * as actions from '../actions'
import { fetch as fetchComments } from '../../comments/actions'
import { slugToId }  from '../../utils/slug'
import { storySelector, storyStateSelector } from '../selectors'
import {
  commentsStatusSelector,
  commentsSelector,
} from '../../comments/selectors'

export class Story extends Component {
  componentDidMount () {
    this.props.fetchStoryWithComments()
  }

  render () {
    const {
      comments,
      commentsStatus,
      fetchComments,
      story,
      storyStatus: { status },
    } = this.props

    const hasMoreContent = (
      comments !== null &&
      ('totalCount' in commentsStatus) &&
      comments.length < commentsStatus.totalCount
    )

    return (
      <div className="row">
        <div className="col-8">
          <StoryContent {...story} status={status} />
          <Comments
            canRender={status === 'success'}
            comments={comments}
            loadMore={fetchComments}
            hasMoreContent={hasMoreContent}
            {...commentsStatus}
          />
        </div>

        <div className="col-4">
          <Card {...story.owner} status={status}/>
        </div>
      </div>
    )
  }
}

Story.defaultProps = {
  match: {
    params: {
      slug: ''
    }
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
    fetchComments: () => dispatch(fetchComments(storyId)),
    fetchStoryWithComments: () => dispatch(actions.fetchWithComments(storyId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Story)
